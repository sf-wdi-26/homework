var app = angular.module('garageSaleApp', ['ui.router', 'ngResource']);

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

app.service('Item', function($resource){
  return $resource('http://localhost:3000/api/items/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});



function HomeController(Item){

  console.log(Item);

  console.log("Home Controller Loaded");
  var vm = this;
  vm.homeTest = "Welcome to the homepage!";

  vm.newItem = {};
  vm.items = Item.query();

  vm.totalRevenue = 0;
  vm.getRevenue = getRevenue;

  vm.createItem = createItem;
  vm.updateItem = updateItem;
  vm.deleteItem = deleteItem;
  vm.markSold = markSold;


  function createItem(){
    vm.newItem.soldStatus = false;
    Item.save(vm.newItem);
    vm.items.unshift(vm.newItem);
    vm.newItem = {};
  }

  function deleteItem(item){
    // console.log("delete");
    Item.remove({id: item._id});
    var index = vm.items.indexOf(item);
    vm.items.splice(index, 1);
  }

  function markSold(item){
    console.log('mark');
    item.soldStatus = true;
    Item.update(item);
  }


  function updateItem(item){
    console.log("update");
    Item.update(item);
    // Item.save(item);
    item.displayEditForm = false;
  }

  //not working?
  var getRevenue = function(){
    vm.items.forEach(function(item){
      vm.totalRevenue += item.price;
    });

    return vm.totalRevenue;
  }

};
