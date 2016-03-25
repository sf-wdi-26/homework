//angular app here
var app = angular.module("toEatly", ["firebase"]);

app.controller("FoodCtrl", function($scope, $firebaseArray) {
  // change to your application URL
  var ref = new Firebase("https://toeatly.firebaseio.com/foods");
  // create a synchronized array to store a collection
  $scope.foods = $firebaseArray(ref);


  $scope.addFood = function() {
	$scope.foods.$add($scope.food).then(function(ref){
		$scope.food = {};		
		});
		console.log("New food is: ", $scope.food);
	};
});