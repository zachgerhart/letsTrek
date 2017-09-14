angular.module("letsTrek").service("service", function($http, $q){

  var apiPlaces = "https://trailapi-trailapi.p.mashape.com/?mashape-key=GaO04j8uRRmsh0fssZIhf5pUcu5wp1pkNPLjsnutWRNwTo6i0Z"

  var apiLocations = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA4Zrs79ze6K0mjpRi2BYxY30pKwTN4p54"


  var deferred2 = $q.defer();
$http.get(apiPlaces).then(function(data){
  deferred2.resolve(data);
})
this.getLocale = function(){
  return $q(function(resolve, rej){
    navigator.geolocation.getCurrentPosition(function(res){
      var location = {
        lng: res.coords.longitude,
        lat: res.coords.latitude
      }
      resolve(location)
    })
  })
}
this.getPlaces = function(){
  return deferred2.promise
}

var deferred1 = $q.defer();
$http.get(apiLocations).then(function(data){
deferred1.resolve(data);
})

this.getLocations = function(){
return deferred1.promise
}






});
