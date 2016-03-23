var app = angular.module("ngMovies",[]);
// console.log("sanity");
app.controller("moviesController", ["$scope", "$http", function($scope, $http){
	$scope.moviesToWatch = [
	{
	title: 'KungFu Panda'
	},
	{
		title: 'Batman'
	},
	{
		title: 'Superman'
	},
	{
		title: 'IpMan'
	},
	{
		title: 'Spiderman'
	},
	{
		title: 'Zootopia'	
	}];
	$scope.movie = {};
	$scope.addNew = function() {
		var newMovie = $scope.movie;
		$scope.movie = {};
		$scope.moviesToWatch.push(newMovie);
	};
}]);