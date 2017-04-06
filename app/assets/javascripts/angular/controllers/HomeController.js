function HomeController($scope, $http, SpotifySearchSong) {


  SpotifySearchSong.searchSong(song).then(function(response) {
    $scope.song = response
  });

}

angular
  .module('findApp')
  .controller('HomeController', HomeController);
