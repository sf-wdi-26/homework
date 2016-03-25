angular
  .module('bookApp', ['ui.router', 'ngResource'])
  .config( BookConfig );

  function BookConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
      // return to book-index if bad route request
      $urlRouterProvider.otherwise("/");
      $stateProvider
      .state('home', {
          url: '/',
          templateUrl: "templates/books-index.html"
      })
      .state('books-index', {
          url: '/books',
          templateUrl: "templates/books-index.html"
      })
      .state('books-show', {
          url: '/books/:id',
          templateUrl: "templates/books-show.html"
      });

      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
  });
      console.log("Config loaded.");
  };
