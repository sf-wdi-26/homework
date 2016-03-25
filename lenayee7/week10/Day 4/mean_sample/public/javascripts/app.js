
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

function HomeController(Todo, $scope) {
     this.newTodo = {};
     this.todos = Todo.query();
     this.createTodo = createTodo;
     this.updateTodo = updateTodo;
     this.deleteTodo = deleteTodo;

function updateTodo(todo) {
   Todo.update({id: todo._id}, todo);
   todo.editForm = false;
 }

 function createTodo(){
     Todo.save(this.newTodo)
     this.todos.push(this.newTodo);
     console.log('saved');
 }

 function deleteTodo(todo) {
   Todo.remove({id:todo._id});
   var todosIndex = this.todos.indexOf(todo);
   this.todos.splice(todosIndex, 1);
 }

}    

app.service("Todo", function($resource) {
   return $resource('http://localhost:3000/api/todos/:id');
});