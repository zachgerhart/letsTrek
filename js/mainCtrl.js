angular.module("letsTrek").controller("mainCtrl", function($scope, service){

  var promise2 = service.getPlaces();
  promise2.then(function(data){
    $scope.getPlaces = data
    console.log($scope.getPlaces)
  })


});
