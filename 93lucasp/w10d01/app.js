console.log("I'm sanity");
var app = angular.module("ngMovie", []);
app.controller("MoviesCtrl", function($scope, $http){
	$scope.feedLimit = 5;
	$scope.moviesToWatch = [
    {
      title: 'Il padrino',
      type: 'thriller'
    },
    {
      title: 'Arancia meccanica',
      type: 'thriller'
    },
    {
      title: 'Tutti pazzi per mary',
      type: 'Commedy'
    }
  ];
  $scope.addMovie = function(){
  	
  	var newMovie = $scope.movie;
  	$scope.movie = {};
  	$scope.moviesToWatch.push(newMovie);

  };
  $scope.deleteMovie = function(movie) { 
  var index = $scope.moviesToWatch.indexOf(movie);
  $scope.moviesToWatch.splice(index, 1);     
};
});

