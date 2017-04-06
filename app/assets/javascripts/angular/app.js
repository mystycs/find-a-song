angular
  .module('findApp', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController'
      })

    $urlRouterProvider.otherwise('/');
  });
