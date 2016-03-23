angular.module('CriminalsApp', [])
  .controller('CriminalsController',['$scope', '$http', CriminalsController]);

  // criminalsController.$inject = ['$http'];

  function CriminalsController ($scope, $http) {
  	$scope.all = [];
  	$scope.addCriminal = addCriminal;
  	$scope.newCriminal = {};

  getCriminals();

  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        $scope.all = response.data.criminals;
    });
      
  }
  function addCriminal(){
    $http
      .post('http://localhost:3000/criminals', $scope.newCriminal)
      .then(function(response){
        getCriminals();
      });
      $scope.newCriminal = {};
  }
  	
  }
