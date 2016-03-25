angular
  .module('yourApp', ['ui.router', 'ngResource'])
  .config(config)
  .factory('Todo', TodoFactory)
  .controller('TodosIndexController', TodosIndexController);

//CONFIG
config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config');
  //use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'templates/todos/index.html',
      controller: 'YourController',
      controllerAs: 'index'
    });
}

//FACTORY
TodoFactory.$inject = ['$resource'];
function TodoFactory($resource) {
  return $resource('/api/todos/:id', { id: '@_id' }, {
    update: {
    method: 'PUT'
    }
  });
}

//CONTROLLER
TodosIndexController.$inject = ['Todo'];
function TodosIndexController(Todo) {
  console.log('Your controller!');
  var vm = this;
  vm.todos = Todo.query(); //get all the todos
  vm.todo = {};

  vm.createTodo = function() {
    var newTodo = Todo.save(vm.todo); //save new todo
    vm.todo = {}; //clear form
    vm.todos.unshift(newTodo); //add new todo to beginning of array of todos
  };

  vm.markDone = function(todo) {
    todo.done = (todo.done ? false : true);
    Todo.update(todo);
  };

  vm.updateTodo = function(todo) {
    Todo.update(todo); //update changes to todo
    todo.editForm = false; //hide edit form
  };

  vm.deleteTodo = function(todo) {
    Todo.remove({ id: todo._id});
    var todoIndex = vm.todos.indexOf(todo); //get index of todo to be deleted
    vm.todos.splice(todoIndex, 1); //splice off todo with that index
  };
}
