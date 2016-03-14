//client-side logic
var eatly = {};

eatly.createFood = function(e) {
  //prevent default behaviour of form newFood.js
  e.preventDefault();
  // run jquery serialize function
  var food = $(e.target).serialize();
  //AJAX post to create food
  $.post("/foods", food)
    .done(function(res) {
      // OPTIMIZE: renders the entire dom eat time a food is created
      eatly.getFoods(eatly.renderFoods);
    })
    .fail(function(err) {
      console.log("Error:", err);
    })
}
// gets all foods
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
