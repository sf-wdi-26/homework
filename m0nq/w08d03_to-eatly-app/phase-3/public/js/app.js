//client-side logic
var eatly = {};

// TODO:
// delete button for each food
// runs function "onclick" called "deleteFood"
// use e.target to find Feed'ss id
// send delete request with id
// ...bakcend stuff... (routes/controller)
// 'res.status(204).send()', i.e. success
// on callback remove Food from page


eatly.createFood = function(e) {
  e.preventDefault();
  var food = $(e.target).serialize();
  $.post("/foods", food)
    .done(function(res) {
      // OPTIMIZE: renders the entire dom each time a food is created
      eatly.getFoods(eatly.renderFoods);
    })
    .fail(function(err) {
      console.log("Error:", err);
    })
}

eatly.getFoods = function(callback) {
  $.get("/foods")
    .done(function(foods) {
      var foods = JSON.parse(foods);
      // execute the callback, passing in all the foods
      callback(foods);
    })
    .fail(function(err) {
      console.log("Error:", err);
    })
}

eatly.deleteFood = function(e) {
  var id = $(e.target).parent(".food").attr("id");
  var ajaxOption = {
    url: '/foods/' + id,
    type: 'DELETE',
    success: function(result) {
      // clear it from the page upon successful delete
      $("#" + id).remove();
    }
  }
  // execute ajax
  $.ajax(ajaxOption);
}

eatly.renderFoods = function(foods) {
  var $foodList = $("#food-list");
  // clear out existing foods out of the list
  $foodList.html("");
  // create the template
  var foodTemplate = Handlebars.compile($("#food-template").html());
  // pass the data into the template
  var compiledHTML = foodTemplate({foods: foods});
  // append the rendered html to the page
  $foodList.append(compiledHTML);
}
