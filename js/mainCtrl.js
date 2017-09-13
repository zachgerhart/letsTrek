angular.module("letsTrek").controller("mainCtrl", function($scope, service){
  navigator.geolocation.getCurrentPosition(function(res){
    console.log(res);
  })

  var promise2 = service.getPlaces();
  promise2.then(function(data){
    $scope.getPlaces = data
    console.log($scope.getPlaces)
  })

  var promise1 = service.getLocations();
  promise1.then(function(data){
    $scope.getLocations = data
    console.log($scope.getLocations)
})





});
