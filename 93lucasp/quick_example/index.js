var express = require('express'),
    app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});


// another example of some simple middleware
// call this function on every route with the param of 'name'
app.param('name', function(request, response, next) {
    // get name from params
  var name = request.params.name;
    // capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    // set the value of the name to the capitalized version
  request.params.name = capitalizedName;
    // pass control to the next middleware function
  next();
});

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});

app.get("/pick-a-color/:choice", function (req, res) {
    res.send( "You picked: " + req.params.choice );
});

app.get("/taco/:index", function (req, res) {
	
    res.send( tacos[ req.params.index ] );
});

app.get("/burger/:index", function (req, res) {

    res.send( burgers[ req.params.index ] );
});

app.get("/pickanumber/:num", function (req, res) {
	var n = 6;
    if (req.params.num > n) {
    	 res.send( "Too High"  );

    }
    if (req.params.num == n) {
    	res.send( "Nailed it!"  );
    }
    else {
    	res.send( "Too low"  );
    }

});

app.get("/pickanumber/:num", function (req, res) {
	var n = 6;
    if (req.params.num > n) {
    	 res.send( "Too High"  );

    }
    if (req.params.num == n) {
    	res.send( "Nailed it!"  );
    }
    else {
    	res.send( "Too low"  );
    }

});




app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});