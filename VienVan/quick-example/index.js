var express = require('express');
var app = express();

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


app.param('name', function(request, response, next) {
  var name = request.params.name;
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.params.name = capitalizedName;
  next();
})

app.get('/', function(request, response) {
  response.send('Hello World');
})

app.get('/burgers', function(request, response) {
  response.send(burgers.join(', '));
})

app.get('/tacos', function(request, response) {
  response.send(tacos.join(', '));
})

app.get('/greet/:name', function(request, response) {
  response.send("Hello " + request.params.name);
})

app.get('/thank', function(request, response) {
  var name = request.query.name;
  response.send("Thank you, " + name);
})

app.get('/pick', function(request, response) {
  var number = request.query.number;
  if(number == 7) {
    response.send('CONGRATs' + number)
  } else if(number >= 7) {
    response.send("TOOBIG");
  } else if(number <= 7) {
    response.send("NOPE")
  }

})



app.listen(3000);
