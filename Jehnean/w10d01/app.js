var app = angular.module("ngMovie", []);

// Controllers 
app.controller("MoviesCtrl", function($scope, $http) {
    $scope.feedLimit = 5; 
    $scope.moviesToWatch = [
      {
        title: 'Ghost in the Shell',
        type: 'anime'
      }, 
      {
        title: 'Il Padrino',
        type: 'thiller'
      },
      {
        title: 'Ants',
        type: 'animation'
      }
    ];

    $scope.addMovie = function(){
      var newMovie = $scope.movie; 
      $scope.movie = {}; 
      $scope.moviesToWatch.push(newMovie);
    };

    $scope.deleteMovie = function(movie){
      var movieIndex = $scope.moviesToWatch.indexOf(movie);
      $scope.moviesToWatch.splice(movieIndex, 1); 
    }

    $scope.watchedMovie = function(movie){
      movie.watched = (movie.watched ? false : true); 
    }

});