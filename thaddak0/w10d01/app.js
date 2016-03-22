var app = angular.module('movieApp', []);

app.controller("MovieCtrl", function($scope){

  $scope.moviesToWatch = [
    {
      name: "Notting Hill"
    },
    {
      name: "Bridget Jones's Diary"
    },
    {
      name: "About a Boy"
    },
    {
      name: "Four Weddings and a Funeral"
    }
  ];
  $scope.limit = 5;
  $scope.movie = {};
  $scope.addMovie = function() {
    var newMovie = $scope.movie;
    console.log(newMovie);
    $scope.moviesToWatch.push(newMovie);
    $scope.movie = '';

  };
  $scope.deleteMovie = function(movie){
    console.log(movie);
    var movieIndexToDelete = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(movieIndexToDelete, 1);
  }

});
