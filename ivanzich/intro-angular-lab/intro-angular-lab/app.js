var app = angular.module('movieApp', []);

app.controller('MovieCtrl', ['$scope', function ($scope) {
  $scope.moviesToWatch = [
    {
      title: 'The Godfather',
      image: 'http://www.theimaginativeconservative.org/wp-content/uploads/2013/04/the-godfather-508d945641aed.jpg'
    },
    {
      title: 'The Revenant',
      image: 'http://www.getmovieposter.com/wp-content/uploads/getmovieposter_the_revenant_2.jpg'
    },
    {
      title: 'Raiders of the Lost Ark',
      image: 'http://www.gamebooks.org/gallery/ij_raiders.jpg'
    },
    {
      title: 'The Pianist',
      image: 'http://www.dvdplanetstore.pk/wp-content/uploads/2013/12/The-pianist.jpg'
    },
    {
      title: 'City Of God',
      image: 'https://s3.amazonaws.com/rapgenius/City%20of%20God.jpg'
    },
    {
      title: 'Matrix',
      image: 'http://images1.fanpop.com/images/photos/1900000/Matrix-the-matrix-1949933-1024-768.jpg'
    }
  ];

  $scope.movie = {};
  $scope.addMovie = function() {
    var newMovie = $scope.movie;
    $scope.movie = {};
    $scope.moviesToWatch.push(newMovie);
  };

  $scope.deleteMovie = function (movie) {
    var movieIndex = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(movieIndex, 1);
  };

  $scope.markWatched = function (movie) {
    movie.watched = (movie.watched ? false : true);
  };

  $scope.movieLimit = 5;
  $scope.toggleMovieLimit = function() {
    if ($scope.movieLimit) {
      $scope.movieLimit = false;
    } else {
      $scope.movieLimit = 5;
    }
  };

  $scope.changeBackground = function() {
    randomIndex = Math.floor(Math.random() * $scope.moviesToWatch.length);
    console.log(randomIndex);
    randomImage = $scope.moviesToWatch[randomIndex].image;
    $scope.style = {'background-image': 'url(' + randomImage + ')'};
  };

  $scope.clearBackground = function() {
    $scope.style = {'background-image': 'none'};
  };

}]);
