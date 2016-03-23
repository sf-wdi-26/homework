var app = angular.module("moviesApp", []);

app.controller("moviesController", function($scope){
	$scope.movies= [
	{
		name: "Home"
	},
	{
		name: "Ray"
	},
	{
		name: "Martian"
	},
	{
		name: "AirBud"
	},
	{
		name: "IceAge"
	},
	];

	$scope.movie = {};
	$scope.addMovie= function(){
		var newMovie = $scope.movie;
		$scope.movie = {};
		$scope.movies.push(newMovie);
	};

	$scope.deleteMovie= function(movie){
		var index = $scope.movies.indexOf(movie);
		$scope.movies.splice(index,1);
	};

	$scope.markWatched= function(movie){
		movie.watched = (movie.watched ? false : true);
	};

});
