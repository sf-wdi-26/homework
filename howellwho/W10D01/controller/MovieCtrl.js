movieApp.controller('MovieCtrl', ['$scope', function ($scope) {
  $scope.moviesToWatch = [
    {
      title: 'Deadpool',
      image: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg'
    },
    {
      title: '10 Cloverfield Lane',
      image: 'http://www.10cloverfieldlane.com/images/share.jpg'
    },
    {
      title: 'Zootopia',
      image: 'http://blogs-images.forbes.com/markhughes/files/2015/08/Zootopia-4-1940x1119.png'
    },
    {
      title: 'Batman vs. Superman',
      image: 'http://cdn2-www.comingsoon.net/assets/uploads/gallery/batman-v-superman-dawn-of-justice-1400694960/bvsquad1.jpg'
    },
    {
      title: 'Star Wars',
      image: 'http://www.thewrap.com/wp-content/uploads/2015/10/Star-Wars-the-Force-Awakens-Poster-Cropped.jpg'
    }
  ];
  $scope.submit = function() {
    var movie = {};
    movie.title = $scope.text;
    if ($scope.text) {
      $scope.moviesToWatch.push(movie);

    }
  };
  $scope.delete = function(movie) {
    var index = $scope.moviesToWatch.indexOf(movie);
    // console.log("index", index);
    $scope.moviesToWatch.splice(index, 1)
  };

  $scope.moviesLimit = 5;
  // $scope.limitTo = function(movie) {
  //   var limit = $scope.moviesToWatch.
  // }
}]);
