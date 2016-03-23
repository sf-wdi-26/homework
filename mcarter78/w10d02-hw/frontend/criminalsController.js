angular.module('criminalsApp', [])
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  var self = this;
  self.all = [];
  self.newCriminal = {};
  self.addCriminal = addCriminal;
  self.deleteCriminal = deleteCriminal;

  function addCriminal() {
    var formThis = this;
    self.newCriminal.name = this.newCriminal.name;
    self.newCriminal.location = this.newCriminal.location;
    self.newCriminal.status = this.newCriminal.status;
    $http
      .post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(){
        getCriminals();
        formThis.newCriminal.name = '';
        formThis.newCriminal.location = '';
        formThis.newCriminal.status = '';
      });
  }

  function deleteCriminal(criminal) {
    $http
      .delete('http://localhost:3000/criminals/' + criminal._id, criminal)
      .then(function(){
        getCriminals();
      });
  }

  function getCriminals() {
    $http
      .get('http://localhost:3000/criminals')
      .then(function(res){
        self.all = res.data.criminals;
      });
  }

  getCriminals();
}
