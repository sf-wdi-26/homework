console.log("LINKED CRIM CONT");

var app = angular.module('TheCriminalsApp', []);

app.controller('CriminalsController', CriminalsController);

app.$inject = ['$http'];

function CriminalsController($http){
  console.log("CriminalsController");
  var self = this;
  self.all = [];

  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();

  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        self.all = response.data.criminals;
      });
  }

  function addCriminal(){
    $http
      .post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(response){
        getCriminals();
      });
    self.newCriminal = {}; //resets value for newCriminal
  }

  function deleteCriminal(criminal){
    // console.log("DELETE");
    $http
      .delete('http://localhost:3000/criminals/' + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

  function editCriminal(criminal){
    
  }

  function changeCriminal(criminal){
    // console.log("DELETE");
    $http
      .patch('http://localhost:3000/criminals/' + criminal._id)
      .then(function(response){

        var name = self.newCriminal.name;
        var location = self.newCriminal.location;
        var status = self.newCriminal.status;

        if(name){
          criminal.name = name;
        }
        if(location){
          criminal.location = location;
        }
        if(status){
          criminal.status = status;
        }
      });
  }

}




// curl -H "Content-Type: application/json" -X POST -d '{"name": "Al Capone", "location": "Chicago, IL, USA", "status": "Dead" }' http://localhost:3000/criminals
