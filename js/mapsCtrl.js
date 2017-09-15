angular.module("letsTrek").controller("mapsCtrl", function($scope, service, $stateParams){
  if ($stateParams.zip){
      service.getLocaleByZip($stateParams.zip).then(function(response){
        initMap(response.lat, response.lng)
      })
    // console.log($stateParams.zip);
  }
  else{
    service.getLocale().then(function(response){
        initMap(response.lat, response.lng)
    })

}

function initMap(lat, lon) {
        var uluru = {lat: lat, lng: lon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
});
