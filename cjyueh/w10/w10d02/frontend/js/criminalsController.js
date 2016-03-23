console.log("cc ready");

angular.module('InfamousCriminalApp', [])
        .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  console.log("working!");
  // this.all = [
  //   {status: 'dead', name: 'Al Capone', location: 'Miami, FL, USA'}
  // ];
  var self = this;
  this.all =[];
  this.addCriminal = addCriminal;
  this.newCriminal = {};
  this.deleteCriminal = deleteCriminal;

  getAllCriminals();

  function getAllCriminals() {
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response) {
        self.all = response.data.criminals;
      });
  }

  function addCriminal() {
    $http
      .post('http://localhost:3000/criminals', this.newCriminal)
      .then(function(response) {
        console.log(response);
        self.all.push(response.data.criminal);
      });
  }

  function deleteCriminal(criminal) {
    $http
      .delete('http://localhost:3000/criminals/' + criminal._id)
      .then(function(response) {
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }
}