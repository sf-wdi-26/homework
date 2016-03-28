var app = angular.module('TodoApp', ['ui.router', 'ngResource']);
app.config(config);
app.controller('TodosController', TodosController);

// function TodosController() {
//   var vm = this;
//   vm.homeTest = "Welcome to the homepage!";
// }

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
        controller: 'TodosController',
        controllerAs: 'home',
        templateUrl: 'templates/home.html'
      });
  }


//FACTORY
TodoFactory.$inject = ['$resource'];
function TodoFactory($resource) {
  // $resource gives you built in CRUDy functions like: save, query, remove, update
  return $resource('http://localhost:3000/api/todos/:id', { id: '@_id' },
{
   'update': { method:'PUT' }
 });

}


app.factory('Todo', TodoFactory)
//CONTROLLER
TodosController.$inject = ['Todo'];
function TodosController (Todo) {
  var vm = this;
  vm.newTodos = {};
  vm.todos = Todo.query();


  vm.createTodo = function() {
    // vm.newTodos.item = "qwe";
    // console.log(vm.newTodos);
    var newTodo = Todo.save(vm.newTodos);
    vm.todos.unshift(newTodo);
    // console.log(Todo.save);
  };

  vm.markDone = function(todo) {
    todo.done = (todo.done ? false : true);
    Todo.update(todo);
    console.log(todo);
  };

  vm.updateTodo = function(todo) {
    Todo.update(todo);
    todo.displayEditForm = false;
    console.log(todo._id);
  };

  vm.deleteTodo = function(todo) {
    Todo.remove({ id: todo._id });
    var todoIndex = vm.todos.indexOf(todo);
    vm.todos.splice(todoIndex, 1);
    console.log("delete",todoIndex);
  };
}
