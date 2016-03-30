var app = angular.module('sampleApp', ['ui.router', 'ngResource']);
app.config(config);
app.factory('Todo', TodoFactory);
app.controller('HomeController', HomeController);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider){
	console.log('config');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	// for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

   $stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'templates/index.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });
}

// FACTORY
TodoFactory.$inject = ['$resource'];
function TodoFactory($resource) {
  // $resource gives you built in CRUDy functions like: save, query, remove, update
  return $resource('/api/todos/:id', { id: '@_id' },
  {
    'update': { method:'PUT' }
  });

}


// CONTROLLER
HomeController.$inject = ['Todo'];
function HomeController(Todo) {
  console.log('controller called!');
  // console.log('hi',Todo.query());
  var vm = this;
  vm.todos = Todo.query();
  vm.todo = {};
  console.log('hey',vm);

  vm.addTodo = function() {
    console.log('adding...');
    // console.log(" Yo Yo",vm.todo);
    var newTodo = Todo.save(vm.todo);
    console.log("newtodoshowinghere", newTodo);
   // console.log('before',vm.todo);
    vm.todo = {};
    // console.log('after',vm.todo);
    vm.todos.unshift(newTodo);
  };

  vm.markDone = function(todo) {
    todo.done = (todo.done ? false : true);
    Todo.update(todo);
  };

  vm.updateTodo = function(todo) {
    Todo.update(todo);
    todo.editForm = false;
  };

  vm.deleteTodo = function(todo) {
    Todo.remove({ id: todo._id });
    var todoIndex = vm.todos.indexOf(todo);
    vm.todos.splice(todoIndex, 1);
  };
}
