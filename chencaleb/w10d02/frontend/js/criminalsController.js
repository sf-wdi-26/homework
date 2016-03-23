app.controller('CriminalsController', ['$scope', '$http', function($scope, $http){

	var self = this;
	self.all = [];
	self.getCriminals = getCriminals;
	self.addCriminals = addCriminals;

	getCriminals();
	function getCriminals(){
		$http
			.get('http://localhost:3000/criminals/')
			.then(function(response){
				self.all = response.data.criminals;
			});
	}


}]);