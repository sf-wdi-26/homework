console.log("sanity check");
var app = angular.module("movieApp",[]);

app.controller("MovieCtrl", ['$scope',function($scope){
  $scope.moviesToWatch = [
  {
    title: "Superman vs Batman" 
  },
  {
    title: "TrainWreck" 
  },
  {
    title: "Deadpool"
  },
  {
    title: "Loncon has fallen"
  }
  ];
}
]);

//add movie
$scope.movie = {};
  $scope.addMovie = function() {
    var newMovie = $scope.movie;
    $scope.movie = {};
    $scope.moviesToWatch.push(newMovie);
  };