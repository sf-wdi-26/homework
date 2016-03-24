angular
  .module('bookApp', ['ui.router', 'ngResource'])
  .config( BookConfig );

  function BookConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
      // return to book-index if bad route request
      $urlRouterProvider.otherwise("/");
      $stateProvider
      .state('home', {
          url: '/',
          // template: "Home!",
          templateUrl: 'templates/books-index.html'
          // controller: 'BooksController'
      })
      .state('books-index', {
          url: '/books/:id',
          // template: "Books!"
          templateUrl: 'templates/books-show.html'
          // controller: 'BooksController'
      });
      console.log("Config loaded.");

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
