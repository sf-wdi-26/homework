var app = angular.module('TheCriminalsApp', []);

app.controller('criminalsCtrl', function($scope, $http) {
	var self = this;
	self.all = [];
	self.addCriminal = addCriminal;
	self.newCriminal = {};
	self.updateCriminal = updateCriminal; 
	self.deleteCriminal = deleteCriminal;

	getCriminals();
	console.log(criminals.all);

	function getCriminals() {
		$http
			.get('http://localhost:3000/criminals')
			.then(function(response){
				self.all = response.data.criminals;
			});
	}

	function addCriminal() {
		$http
			.post('http://localhost:3000/criminals', self.newCriminal)
			.then(function(response){
				console.log('added new criminal!');
				getCriminals();
			});
	}

//WIP: updating existing criminals.
	function updateCriminal(criminal)	{
	// 	$http
	// 		.patch('http://localhost:3000/criminals/' + criminal._id)
	// 		.then(function(response){
	// 			var index = self.all.indexOf(criminal);
	// 			console.log(criminal.name);
	// 			// criminal.name = self.name;
	// 			console.log(self.all[index]);
	// 			getCriminals();
	// 		});
	}



	function deleteCriminal(criminal) {
		$http
			.delete('http://localhost:3000/criminals/' + criminal._id)
			.then(function(response){
				var index = self.all.indexOf(criminal);
				self.all.splice(index, 1);
				getCriminals();
				console.log('criminal has gone straight.');
			});
	}

});