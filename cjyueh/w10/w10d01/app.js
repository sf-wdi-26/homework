var app = angular.module("movieApp", []);

app.controller("movieController", function($scope) {
  $scope.moviesToWatch = 
    [
      {
        title: "The Martian"
      },
      {
        title: "Hello, My Name Is Doris"
      },
      {
        title: "The B.F.G."
      },
      {
        title: "The Revenant"
      },
      {
        title: "Under the Shadow"
      },
      {
        title: "Finding Dory"
      },
      {
        title: "Lego Movie"
      }
    ];
  
  $scope.addMovie = function() {
    if ($scope.movie.title) {
      var movie = {
        title: $scope.movie.title
      };
      $scope.moviesToWatch.push(movie);
    }
  };
  $scope.limit = 5;
  $scope.toggleLimit = function() {
    if ($scope.limit) {
      $scope.limit = false;
    } else {
      $scope.limit = 5;
    }
  };
  $scope.deleteMovie = function(movie) {
    var index = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(index, 1); 
  };
});