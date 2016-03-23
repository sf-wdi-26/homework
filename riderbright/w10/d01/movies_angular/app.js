var app = angular.module("ngFun",[]);

app.controller("moviesCtrl", function($scope){
    $scope.user = {
        name: 'Grand Master Cache'
    }
    $scope.tagline = "NOOICE MOVIEES"
    $scope.movies = [
       {
      date: 'March 25, 2016',
      name: 'Batman Vs. Superman',
      director: 'Zack Snyder'
    
    },
         {
      date: 'March 4, 2016',
      name: 'Zootopia',
      director: 'Jared Bush'
    },
 
  ];
});

app.filter('reverse',function(){
    return function(input){
        input = input || '';
        var out = input.split("").reverse().join("");
        out = out.toLowerCase();
        out = out[0].toUpperCase() + out.slice(1);
        return out;
    };
})