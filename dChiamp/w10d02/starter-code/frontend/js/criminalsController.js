app.controller('criminalsController', ['$scope', '$http', function($scope, $http){


  var self = this;
  this.all = []
  self.newCriminal = {}
  self.getCriminals = getCriminals;
  self.addCriminal = addCriminal;
  self.deleteCriminal = deleteCriminal;
  self.updateCriminal = updateCriminal;

  $scope.test = "testing";
  console.log($scope);

  function getCriminals () {
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        console.log(response);
        self.all = response.data.criminals;
      });
  }

  function addCriminal () {
    $http
      .post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(res) {
        console.log(res);
        getCriminals();
      })
      self.newCriminal = {};
  }

  function deleteCriminal(criminal) {
    $http
      .delete('http://localhost:3000/criminals/' + criminal._id)
      .then(function(res){
        var index = seld.all.indexOf(criminal);
        self.all.splice(index, 1);
      })
  }

  function updateCriminal(criminal) {
    $http
      .patch('http://localhost:3000/criminals/' + criminal._id)
  }

  getCriminals();
}])