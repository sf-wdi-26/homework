console.log('CC linked');

angular.module('criminalApp', [])
    .controller('criminalsController', criminalsController);

criminalsController.$inject = ['$http'];

function criminalsController($http){

      this.all = [];
      var self = this
      this.addCriminal = addCriminal;
      this.newCriminal = {};
      this.editCriminal = editCriminal;
      this.editedCriminal = {};
      this.deleteCriminal = deleteCriminal;
      this.criminal = {};

      function getAllCriminals(){
        $http
        .get('http://localhost:3000/criminals')
        .then(function(response){
          self.all = response.data.criminals
        })
      }

      function addCriminal(){
        $http
        .post('http://localhost:3000/criminals', this.newCriminal)
        .then(function(response){
         self.all.push(response.data.criminal);
          // console.log(response)
        })
      }

      function deleteCriminal(criminal){
        $http
        .delete('http://localhost:3000/criminals/'+ criminal._id)
        .then(function(response){
          var index = self.all.indexOf(criminal);
          self.all.splice(index, 1);
        })
      }

      function editCriminal(criminal) {
        // $http
        // .patch('http://localhost:3000/criminals/'+ criminal._id, criminal)
        // .then(function(response){
        //   // var index = self.all.indexOf(criminal);
        //   // self.all[index] = criminal
        //   console.log(criminal);
        // })
      }

      getAllCriminals();
}
