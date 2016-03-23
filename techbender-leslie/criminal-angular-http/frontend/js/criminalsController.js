angular.module('InfamousCriminals', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ["$http"];

function CriminalsController($http) {
	var self = this;
	self.all = [];
	self.addCriminal = addCriminal;
	self.newCriminal = {};
	self.getCriminals = getCriminals;
	self.deleteCriminal = deleteCriminal;


	getCriminals();
	function getCriminals(){
	}

	function addCriminals(){

	}

	function deleteCriminals(criminal) {
		
	}
	







}