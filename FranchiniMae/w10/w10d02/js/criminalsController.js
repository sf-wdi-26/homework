angular.module('TheCriminalsApp', [])
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];
// says we are using http service, so from javascript, load it so that it is available in angular app

function CriminalsController($http){
  this.all = [];
  var self = this;
  this.addCriminal = addCriminal;
  this.newCriminal = {};
  this.deleteCriminal = deleteCriminal;
  // this.editCriminal = editCriminal;

  function addCriminal(){
  	data = this.newCriminal;
  	this.all.push(data);
  	$http
  		.post('http://localhost:3000/criminals', data)
  		.then(function (res, err){  
        if (err) console.log(err);
        console.log(res);
        });
    this.newCriminal = {};
		}

		function getCriminals() {
			$http
				.get('http://localhost:3000/criminals')
				.then(function(res){
					console.log(res);
					self.all = res.data.criminals;
				});
		}

		function deleteCriminal(criminal) {
			$http
				.delete('http://localhost:3000/criminals/' + criminal._id)
				.then(function(res){
					var index = self.all.indexOf(criminal);
					self.all.splice(index, 1);
				});
		}

		getCriminals();
}