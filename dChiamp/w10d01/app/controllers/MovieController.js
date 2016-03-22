app.controller('MovieController', ['$scope', '$http', function($scope, $http){
  $scope.moviesToWatch = [
    {
      name: "The Thing",
      year: "1986"
    },
    {
      name: "Nowhere",
      year: "1993"
    },
    {
      name: "They Live",
      year: "1988"
    },
    {
      name: "El Topo",
      year: "1979"
    }
  ];
  $scope.movie = {};
  $scope.addMovie = function() {
    var newMovie = $scope.movie;
      $scope.movie = {}
      // newMovie.name = $scope.name;
      $scope.moviesToWatch.push(newMovie);
  };

  $scope.deleteMovie = function(movie) {
    var index = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(index, 1);
  }

}]);

console.log('hello from movie controller');
