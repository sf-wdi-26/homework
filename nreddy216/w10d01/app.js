var app = angular.module("moviesApp", []);

app.controller("MoviesCtrl", ["$scope", function($scope){
  $scope.moviesToWatch = [
    {
      title: "Zoolander 1",
      imageUrl: "http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/08/zoolander-2-teaser-trailer.jpg"
    },
    {
      title: "Aoolander 2",
      imageUrl: "http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/08/zoolander-2-teaser-trailer.jpg"
    },
    {
      title: "Boolander 3",
      imageUrl: "http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/08/zoolander-2-teaser-trailer.jpg"
    },
    {
      title: "Doolander 4",
      imageUrl: "http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/08/zoolander-2-teaser-trailer.jpg"
    },
    {
      title: "Moolander 5",
      imageUrl: "http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/08/zoolander-2-teaser-trailer.jpg"
    }
  ];

  $scope.addMovie = function(){
    if($scope.text){
      var movie = {
        title: $scope.text
      }
      $scope.moviesToWatch.push(movie);
    }
  };

  $scope.deleteMovie = function(movie){
    var index = $scope.moviesToWatch.indexOf(movie);

    $scope.moviesToWatch.splice(index, 1);

  };

  $scope.movieLimit = 5;

  $scope.randomMovieImage = function(){
    var randomIndex= Math.floor(Math.random()*$scope.moviesToWatch.length);
    // return randomIndex;
    // console.log(randomIndex);
    // return $scope.moviesToWatch[randomIndex].imageUrl;
    $scope.style = $scope.moviesToWatch[randomIndex].imageUrl;
  };

  // $scope.bgimage = $scope.randomMovieImage();
}]);
