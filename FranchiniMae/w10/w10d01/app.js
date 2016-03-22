var app = angular.module('movieApp', []);

app.controller("movieController", function ($scope) {
	$scope.moviesToWatch = [
		{
			title: 'The Martian'
		},
		{
			title: 'Zootopia'
		},
		{
			title: 'The Revenant'
		},
		{
			title: 'London Has Fallen'
		},
		{
			title: 'Star Wars: The Force Awakens'
		},
		{
			title: 'Finding Nemo'
		},
		{
			title: 'Hitch'
		}
	];
	$scope.addMovie = function () {
		if ($scope.text) {
			var movie = {
				title: $scope.text
			};
			$scope.moviesToWatch.push(movie);
		}
	};
	$scope.deleteMovie = function(movie) {
		var index = $scope.moviesToWatch.indexOf(movie);
		$scope.moviesToWatch.splice(index, 1);
	};
	$scope.limit = 5;
	$scope.toggleLimit = function () {
		if ($scope.limit) {
			$scope.limit = false;
		} else {
			$scope.limit = 5;
		}
	};
});