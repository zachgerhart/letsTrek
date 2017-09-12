angular.module("letsTrek").service("service", function($http, $q){
  var apiPlaces = "https://trailapi-trailapi.p.mashape.com/?mashape-key=GaO04j8uRRmsh0fssZIhf5pUcu5wp1pkNPLjsnutWRNwTo6i0Z"

  var deferred2 = $q.defer();
$http.get(apiPlaces).then(function(data){
  deferred2.resolve(data);
})

this.getPlaces = function(){
  return deferred2.promise
}

});
