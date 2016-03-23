var app = angular.module("myApp", []);

app.controller("moviesCtrl", function($scope) {

	$scope.moviesToWatch = [
	{
		name: "Titanic",
		releaseYear: 1997,
		image: "http://1.bp.blogspot.com/-0N7vyEnl0XU/T4CEbUlhhVI/AAAAAAAABTs/GohXEW3MGNw/s1600/titanic01.jpg"
	},
	{
		name: "Avatar",
		releaseYear: 2009,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5owfGCN1IDiZ21NEbkjdZGsY5jVBfLIM1uKov886HAFLsGf6r"
	},
	{ 
		name: "The Terminator",
		releaseYear: 1984,
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Terminator1984movieposter.jpg/220px-Terminator1984movieposter.jpg"
	},
	{
		name: "Terminator 2: Judgement Day",
		releaseYear: 1991, 
		image: "https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg"
	}];

	$scope.addMovie = function(movie) {
		if ($scope.movie.name && $scope.movie.releaseYear) {
			var newMovie = {};
			newMovie.name = this.movie.name;
			newMovie.releaseYear = this.movie.releaseYear;
			console.log(newMovie);
			$scope.moviesToWatch.push(newMovie);
		}
	}; 

	$scope.deleteMovie = function(movie){
		var index = $scope.moviesToWatch.indexOf(this.movie);
		console.log(index);
		if (index > -1) {
			$scope.moviesToWatch.splice(index, 1);
		}
	};
});