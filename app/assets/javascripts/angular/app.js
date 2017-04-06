var spotifyClientID = "ae60a46e13df49d886a0685c2d49821a"
var spotifyClientSecret = "862370fa57424ae0bff6ce527b56d535"

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
