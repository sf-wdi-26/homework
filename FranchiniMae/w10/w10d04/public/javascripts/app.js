console.log("app.js loaded");
var app = angular.module('sampleApp', ['ui.router', 'ngResource']);

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('config');
    //this allows us to use routes without hash params!
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    // for any unmatched URL redirect to /
    $urlRouterProvider.otherwise("/");

     $stateProvider
      .state('home', {
        url: "/",
        controller: 'HomeController',
        controllerAs: 'home',
        templateUrl: "templates/home.html"
        // template: 'Home!'
      });
  }

app.controller('HomeController', HomeController);

function HomeController (Todo){
	var vm = this;
	// vm.homeTest = "Welcome to the homepage!";
  vm.newTodo = {}; // will hold user input for new book
  vm.todos = Todo.query(); // returns all the books
  vm.createTodo = createTodo;
  vm.updateTodo = updateTodo;
  vm.deleteTodo = deleteTodo;

	function createTodo() {
		Todo.save(vm.newTodo);
		vm.todos.push(vm.newTodo);
		console.log(vm.newTodo);
		vm.newTodo = {};
}

  function updateTodo(todo) {
    Todo.update({id: todo._id}, todo);
    // todo.displayEditForm = false;
  }

	function deleteTodo (todo) {
    Todo.remove({id: todo._id});
    var index = vm.todos.indexOf(todo);
    vm.todos.splice(index, 1);
    console.log('deleted');
	}
}

app.service('Todo', function($resource) {
  return $resource('http://localhost:3000/api/todos/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
