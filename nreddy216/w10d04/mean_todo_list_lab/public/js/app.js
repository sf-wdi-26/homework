var app = angular.module('sampleApp', ['ui.router', 'ngResource']);

// app.$inject = ['ui-router'];

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider){
  console.log('config');

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  //for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      controller: 'HomeController',
      controllerAs: 'home',
      templateUrl: 'templates/home.html'
    });
};

app.controller('HomeController', HomeController);

app.service('Todo', function($resource){
  return $resource('http://localhost:3000/api/todos/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});



function HomeController(Todo){

  console.log(Todo);

  console.log("Home Controller Loaded");
  var vm = this;
  vm.homeTest = "Welcome to the homepage!";

  vm.newTodo = {};
  vm.todos = Todo.query();
  vm.createTodo = createTodo;
  vm.updateTodo = updateTodo;
  vm.deleteTodo = deleteTodo;
  vm.markCompleted = markCompleted;


  function createTodo(){
    vm.newTodo.completed = false;
    Todo.save(vm.newTodo);
    vm.todos.unshift(vm.newTodo);
    vm.newTodo = {};
  }

  function deleteTodo(todo){
    // console.log("delete");
    Todo.remove({id: todo._id});
    var index = vm.todos.indexOf(todo);
    vm.todos.splice(index, 1);
  }

  function markCompleted(todo){
    console.log('mark');
    todo.completed = true;
    Todo.update(todo);
  }


  function updateTodo(todo){
    console.log("update");
    Todo.update(todo);
    // Todo.save(todo);
    todo.displayEditForm = false;
  }

};
