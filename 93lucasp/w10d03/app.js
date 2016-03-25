angular
  .module('bookApp', ['ui.router', 'ngResource'])
  .config( BookConfig );

  function BookConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
      // return to book-index if bad route request
      $urlRouterProvider.otherwise("/");
      $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'templates/books-index.html'
      
      });
      // .state('books', {
      //     url: '/books',
      //     templateUrl: '/templates/books-index.html',
      //     controller: '/BooksController as bc'
      // });
      console.log("Config loaded.");
  };
