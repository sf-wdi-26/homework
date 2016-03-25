angular.module('sampleApp', ['ui.router', 'ngResource'])
	.config(config)
	.factory('List', ListFactory)
	.controller('ListsIndexController', ListIndexController);


//CONFIG

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
	console.log('config');
	//this allows us to use routes without hash params
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "../templates/home.html",
			controller: 'ListsIndexController',
			controllerAs: 'index'
		});
}


//FACTORY
ListFactory.$inject = ['$resource'];
function ListFactory($resource) {
	return $resource("/lists/:id", { id: '@_id'}, 
	{
		'update': {
			method: 'PUT'
		}, 
		'query': {
			isArray: true,
			transformResponse: function(data) {
				return angular.fromJson(data).lists;
			}
		}
	});
}


//CONTROLLER

ListIndexController.$inject = ['List'];
function ListIndexController (List) {
	var vm = this;
	vm.list = {};
	vm.lists = List.query();

	vm.homeTest = "Welcome to the homepage!";

	vn.createList = function() {
		var newList = List.save(vm.list);
		vm.list = {};
		vm.lists.unshift(newList);
	};

	vm.updateList = function(list) {
		List.update(list);
		list.editForm = false;
	};

	vm.deleteList = function(list) {
		List.remove({ id: list._id });
		var listIndex = vm.lists.indexOf(list);
		vm.lists.splice(listIndex, 1);
	};
	
}

