var app = angular.module('sampleApp', ['ui.router', 'ngRoute']);

app.config(config);
app.controller('TodoController', TodoController);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$routeProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider){
  console.log('config');
  // this allows us to use routes without hash params
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  // for any unmatched URL to redirect to /
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/api/todos',
      controller: 'TodoController',
      controllerAs: 'todos'
    })
    .state('home', {
      url: '/',
      controller: 'TodoController',
      controllerAs: 'todos',
      templateUrl: 'templates/home.hbs'
    });

}

function TodoController($http) {
  var vm = this;
  vm.all = [];
  this.newTodo = {};
  this.isHidden = false;

  this.showEdit = function(){
      this.isHidden = !this.isHidden;
  };
  vm.getAll = function() {
    $http
      .get('/api/todos')
      .then(function(res){
        console.log(res);
        vm.all = res.data;
      });
  };
  vm.createTodo = function() {
    vm.newTodo.title = this.newTodo.title;
    vm.newTodo.description = this.newTodo.description;
    vm.newTodo.completed = false;
    $http
      .post('/api/todos', vm.newTodo)
      .then(function(todo) {
        console.log(todo);
        vm.all.push(todo.data);
        vm.newTodo = {};
      });
  };
  vm.updateTodo = function(todo) {
    var todoId = todo._id;
    $http
      .put('/api/todos/' + todoId, todo)
      .then(function(updatedTodo) {
        console.log(updatedTodo);
      });
  };
  vm.completeTodo = function(todo) {
    console.log(todo);
    var todoId = todo._id;
    $http
      .put('/api/todos/' + todoId, todo)
      .then(function(updatedTodo) {
        console.log(updatedTodo);
      });
  };
  vm.getAll();
}

app.directive("hideMe", function(){
    return function(scope, element, attrs){
        scope.$watch(attrs.hideMe, function(newVal){
            console.log(newVal);
            if(newVal){
              TweenMax.to($('.edit-form'), 0, {opacity: 1});
            } else {
              TweenMax.to($('.edit-form'), 0, {opacity: 0});
            }
        });
    };
});
