"user strict";
var app = angular.module("ToEatly", ["firebase"]);

app.controller('FoodCtrl', function($scope, $firebaseArray) {
	var foodRef = new Firebase("https://mysupersweetapps.firebaseio.com/foods");
	$scope.foods = $firebaseArray(foodRef);

	$scope.addFood = function() {
		$scope.foods.$add($scope.food);
		$scope.food = {};
	};
});