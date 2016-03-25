console.log('loaded');
var app = angular.module('sampleApp', ['ui.router', 'ngResource']);

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config');

  $locationProvider.html5Mode({
    enabled: true,
    requiredBase: false
  });

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      controller: 'HomeController',
      controllerAs: 'home'
    });
}

app.controller('HomeController', HomeController);

function HomeController(Todo) {
  var vm = this;
  // vm.homeTest = "Welcome to the homepage!";
  // vm.addTodo = addTodo;
  // vm.newTodo = {};

    vm.newTodo = {}; // will hold user input for new todo
    vm.todos = Todo.query(); // returns all the todos
    vm.createTodo = createTodo;
    vm.updateTodo = updateTodo;
    vm.deleteTodo = deleteTodo;

    function createTodo(){
      Todo.save(vm.newTodo);
      console.log(vm.newTodo);
      vm.todos.push(vm.newTodo);
      vm.newTodo = {};
    }

    function updateTodo(todo){
      Todo.update({id: todo._id}, todo);
      vm.todos[todo._id] = todo
      console.log(todo);
    }

    function deleteTodo(todo){
      Todo.remove({id: todo._id});
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);
    }
}



app.service('Todo', function($resource) {
    return $resource('http://localhost:3000/api/todos/:id');
  });
