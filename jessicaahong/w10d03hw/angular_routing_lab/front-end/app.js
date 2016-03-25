var app = angular.module('wineApp', ['ngRoute']);

////////////
// ROUTES //
////////////

app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/', {
      //template: 'Home!'
      //we want a list of all wines when we go to the homepage
      //we want to render the wines-index template!
      //if we edit the Wines Index Controller, we can access all of the $scope objects in the template
      templateUrl: 'templates/wines-index.html',
      controller: 'WinesIndexCtrl'
    })
    .when('/wines/:id', {
        templateUrl: 'templates/wines-show.html',
        controller: 'WinesShowCtrl'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});

/////////////////
// CONTROLLERS //
/////////////////

app.controller('WinesIndexCtrl', function($scope, $http){
  console.log("Wine Index");
  $scope.hello = "Check out all of our wines!";
  //had to pass WineService through to get access to this function, otherwise returned undefined
  // $scope.wines = WineService.query();
  $http
    .get('http://localhost:3000/api/wines')
    .then(function(res, err){
        if (err){
            console.log('ERROR: ', err);
        } else {
            $scope.wines = res.data.wines;
        }
    });

    $scope.createWine = function(){
        console.log(this.newWine);
        $http
            .post('http://localhost:3000/api/wines', this.newWine)
            .then(function(response){
                console.log("new wine added");
                $http
                    .get('http://localhost:3000/api/wines')
                    .then(function(res, err){
                        if (err){
                            console.log('ERROR: ', err);
                        } else {
                            $scope.wines = res.data.wines;
                        }
                    });
            });
    };

    $scope.deleteWine = function(wine) {
        console.log("BANANA");
        $http
            .delete('http://localhost:3000/api/wines/' + wine._id)
            .then(function(response){
                var index = $scope.wines.indexOf(wine);
                console.log($scope.wines);
                $scope.wines.splice(index, 1);
                $http
                    .get('http://localhost:3000/api/wines')
                    .then(function(res, err){
                        if (err){
                            console.log('ERROR: ', err);
                        } else {
                            $scope.wines = res.data.wines;
                        }
                    });
            });
    };
});


app.controller('WinesShowCtrl',function($scope, $http, $routeParams){
    console.log("Wine Show");
    var wineID = $routeParams.id;
    $http
        .get('http://localhost:3000/api/wines/' + wineID)
        .then(function(res, err){
            if (err) {
                console.log('ERROR: ', err);
            } else {
                console.log(res.data.wine.name);
                $scope.wine = res.data.wine;
            }
        });
});

////////////
// MODELS //
////////////

app.factory('WineService', function(){

  var WineService = {};

  WineService.query = function(){
    return ALL_WINES;
  };

  WineService.get = function(id){
    var id = parseInt(id);
    return ALL_WINES.find(function(wine){
      return wine.id == id;
    });
  };

  return WineService;

});
