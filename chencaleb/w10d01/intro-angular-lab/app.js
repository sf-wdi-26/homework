var app = angular.module('movieApp', []);

app.controller('MovieCtrl', ['$scope', function ($scope) {
  $scope.moviesToWatch = [
    {
      title: 'Inside Out',
      image: 'http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg'
    },
    {
      title: 'Star Wars: Episode VII',
      image: 'http://cdn.wegotthiscovered.com/wp-content/uploads/star-wars-episode-72.jpg'
    },
    {
      title: 'Shaun the Sheep',
      image: 'https://silentlondon.files.wordpress.com/2015/01/shaun_chase_quad_uk-release-date.jpg'
    },
    {
      title: 'The Big Short',
      image: 'http://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/09/22/17/rysangos.jpg'
    },
    {
      title: 'Steve Jobs',
      image: 'http://www.geek.com/wp-content/uploads/2015/10/steve-jobs-movie-2015-holding.jpg'
    },
    {
      title: 'Trainwreck',
      image: 'http://www.trbimg.com/img-55a53d5c/turbine/ct-trainwreck-movie-review-amy-schumer-20150713'
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