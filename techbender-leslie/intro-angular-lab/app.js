var app = angular.module("movieList", []);

	app.controller("OneController", 
		['$scope', function($scope) {  //why is scope called twice?
			$scope.moviesToWatch = [
				{
					title: "The Martian",
					release_year: 2015,
					length_min: 144,
					image_url: "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
				},
				{
					title: "The Danish Girl",
					release_year: 2015,
					length_min: 119,
					image_url: "http://ia.media-imdb.com/images/M/MV5BMjA0NjA4NjE2Nl5BMl5BanBnXkFtZTgwNzIxNTY2NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
				},
				{
					title: "Sisters",
					release_year: 2015,
					length_min: 118,
					image_url: "http://ia.media-imdb.com/images/M/MV5BMjM3MzQ5NDE5MF5BMl5BanBnXkFtZTgwODE5OTQyNzE@._V1_SX214_AL_.jpg"
				},
				{
					title: "The Incredibles",
					release_year: 2004,
					length_min: 115,
					image_url: "http://ia.media-imdb.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
				},
				{
					title: "The 5th Wave",
					release_year: 2016,
					length_min: 112,
					image_url: "http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
				},
				{
					title: "Ex Machina",
					release_year: 2015,
					length_min: 110,
					image_url: "http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
				}
			];

$scope.movie = {};
$scope.addMovie = function() {
	var newMovie = $scope.movie;
	$scope.movie = {};
  $scope.moviesToWatch.push(newMovie);
 };

 $scope.deleteMovie = function(movie) {
 	var whichMovie = $scope.moviesToWatch.indexOf(movie);
 	$scope.moviesToWatch.splice(movieIndex, 1);
 };

 $scope.watchedMovie = function (movie) {
 	movie.watched = (movie.watched ? false : true);
 };
  
}]);