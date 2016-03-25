"use strict";

var app = angular.module("ToEatly", ["firebase"]);


app.controller("FoodCtrl", function($scope, $firebaseArray) {
	var ref = new Firebase("https://dazzling-inferno-6967.firebaseio.com/foods");
	$scope.foods = $firebaseArray(ref);
	$scope.addFood = function() {
		$scope.foods.$add($scope.food).then(function(ref){
			$scope.food={};
		});
		console.log("food has been added");
	};
});
