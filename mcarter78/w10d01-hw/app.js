var app = angular.module('movieApp', []);

app.controller('moviesController', ['$scope', function($scope){
  $scope.moviesToWatch = [
    {
      title: "Good Dinosaur, The"
    },
    {
      title: "Zootopia"
    },
    {
      title: "Interstellar"
    },
    {
      title: "Revenant, The"
    }
  ];
  $scope.text = '';
  $scope.addMovie = function() {
    var newMovie = $scope.text;
    var movieObj = {};
    movieObj.title = newMovie;
    $scope.moviesToWatch.push(movieObj);
    $scope.text = '';
  };
  $scope.deleteMovie = function(movie) {
    var index = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(index, 1);
  };
}]);
