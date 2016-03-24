var app = angular
  .module('bookApp', ['ui.router', 'ngResource'])
  .config( BookConfig );

  function BookConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
      // return to book-index if bad route request
      $urlRouterProvider.otherwise("/");
      $stateProvider
      .state('home', {
          url: '/',
          templateUrl: "./templates/books-index.html"
      })
      .state('books-index', {
          url: '/books',
          templateUrl: "./templates/books-show.html"
      });
      console.log("Config loaded.");
  };
