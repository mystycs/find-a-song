function HomeController($scope, $http, SpotifySearchSong, $sce) {


  $scope.searchSong = function(song) {
    SpotifySearchSong
      .searchASong(song)
      .then(function(response) {
        $scope.songs = response
      });
  }
}

angular
  .module('findApp')
  .controller('HomeController', HomeController);
