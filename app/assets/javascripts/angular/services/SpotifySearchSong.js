function SpotifySearchSong($http) {

  this.searchSong = function(query) {
    var spotifyQueryURL = "https://api.spotify.com/v1/search"
      //https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US

    spotifyQueryURL = spotifyQueryURL + '?q=' + query + '&type=track&market=US'

    return $http({
      method: 'GET',
      url: spotifyQueryURL,
      reponseType: 'json'
    }).then(function successCallback(response) {
      return response
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }

}

angular
  .module('findApp')
  .service('SpotifySearchSong', SpotifySearchSong)
