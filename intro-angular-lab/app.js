var app = angular.module("movieApp", []);

app.controller('MovieCtrl', ['$scope', function($scope){
  $scope.moviesToWatch = [
    {
      title: 'Star Wars: Episode VII',
      image: 'http://images-cdn.moviepilot.com/images/c_fill,h_1080,w_1920/t_mp_quality/sr9sdy1l5msiturvzvpx/star-wars-episode-7-the-force-awakens-the-story-so-far-does-this-not-look-like-a-threa-687556.jpg'
    },
    {
      title: 'Blazing Saddles',
      image: 'http://i.jeded.com/i/blazing-saddles.16193.jpg'
    },
    {
      title: 'Robin Hood: Men in Tights',
      image: 'http://rcdn-4.fishpond.com.au/0001/500/850/1971636/6.jpeg'
    },

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
}]);