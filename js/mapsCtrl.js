angular.module("letsTrek").controller("mapsCtrl", function($scope, service, $stateParams){
var map;
function initMap(lat, lon) {
  var uluru = {lat: lat, lng: lon};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

 //  var infowindow = new google.maps.InfoWindow({
 //   content: contentString
 // });
 // marker.addListener('click', function() {
 //  infowindow.open(map, marker);
 // });



}


  if ($stateParams.state){
      service.getLocaleByZip($stateParams.state).then(function(response){
        initMap(response.lat, response.lng)
      })
    // console.log($stateParams.zip);
  }
  else{
    service.getLocale().then(function(response){
        initMap(response.lat, response.lng)
    })
}

$scope.getTrails = service.getStateTrails($stateParams.state).then(function(res){
  console.log(res);
  for (var i=0; i < res.length; i++){
    var lat = res[i].lat
    var lng = res[i].lon
    var title = res[i].name
    // var latLng = new google.maps.LatLng(lat, lng);
    var marker = new google.maps.Marker({
      title: title,
      position: {
        lat: lat,
        lng: lng
      },
      map: map
    })
    // console.log(marker)
  }
})


});
// console.log($scope.getTrails)
