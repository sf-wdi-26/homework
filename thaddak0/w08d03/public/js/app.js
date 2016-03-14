//client-side logic
var eatly = {};

eatly.createFood = function(e) {
  e.preventDefault();
  var food = $(e.target).serialize();
  $.post("/foods", food)
    .done(function(res) {
      // OPTIMIZE: renders the entire dom eat time a food is created
      eatly.renderFood(res);
      // console.log(res);
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

eatly.renderFood = function(food) {
    var $foodList = $("#food-list");
    var foodTemplate = Handlebars.compile($("#food-template").html());
    console.log("foodtemplate", foodTemplate);
    var food = JSON.parse(food);
    var compiledHTML = foodTemplate({foods: [food]});
    console.log("compiledhtml", compiledHTML);
    $foodList.prepend(compiledHTML);
    console.log("food", food);

}

eatly.deleteFood = function(e) {
  e.preventDefault();
  var foodId = $(e.target).closest('div').attr('id');
  $('#'+foodId).remove();
  $.ajax({
    method: 'DELETE',
    url: '/foods/:id',
    data: {id: foodId},
    success: function() {

    }
  })


}
