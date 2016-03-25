var app = angular.module('todoApp', ['ui.router', 'ngResource']);


app.config(config);

config.$inject =['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      controller: 'HomeController',
      templateUrl: 'templates/home.html'
    })
};
