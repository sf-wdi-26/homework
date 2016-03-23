angular.module('TheCriminalsApp', [])
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

function CriminalsController($http){
  var self = this;
  this.all = [];
  this.addCriminal = addCriminal;
  this.newCriminal = {};
  // this.deleteCriminal = editCriminal;
  this.deleteCriminal = deleteCriminal;

  function addCriminal(){
    this.all.push(this.newCriminal);
    $http
      .post('http://localhost:3000/criminals',this.newCriminal)
      .then(function(res,err){
        if (err){console.log(err);}
        else{
          console.log(res);          
        }
      });
    this.newCriminal = {};
  }

  // function editCriminal(president){
  //   $http
  //     .put('http://localhost:3000/presidents')
  //     .then(function(response){
  //       self.all = response.data.presidents;
  //     });
  // }

  function deleteCriminal(criminal){
    $http
      .delete('http://localhost:3000/criminals/'+ criminal._id)
      .then(function(){
        var index = self.all.indexOf(criminal);
        self.all.splice(index,1);
      });
  }

  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        self.all = response.data.criminals;
      });
  }
  getCriminals();
}
