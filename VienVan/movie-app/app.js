console.log("linked");
var app = angular.module("movieApp", []);

app.controller("movieCtrl", ["$scope", function($scope) {
  $scope.moviesToWatch = [
    {
      name: "Bridges of Spies"
    },
    {
      name: "Moon"
    },
    {
      name: "Green Mile"
    },
    {
      name: "Choke"
    },
    {
      name: "Hitchhiker's Guide to The Galaxy"
    }
  ];
  $scope.addMovie = function() {
    if($scope.text) {
      var newMovie = {};
      newMovie.name = $scope.text;
      $scope.moviesToWatch.push(newMovie);
    }
  }
  $scope.deleteMovie = function(movie) {

    var index = $scope.moviesToWatch.indexOf(movie);
    console.log(index);
    $scope.moviesToWatch.splice(index, 1);
    // $scope.moviesToWatch.splice(index);

  }
  $scope.limit = 5;
}])
