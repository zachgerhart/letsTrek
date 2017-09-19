angular.module("letsTrek").controller("mapsCtrl", function($scope, service, $stateParams){
var map;

function initMap(lat, lon, content) {
  var uluru = {lat: lat, lng: lon};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru
  });
 //  var contentString = content;
 //  var infowindow = new google.maps.InfoWindow({
 //   content: contentString
 // });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    // infowindow: infowindow
  });

 // google.maps.event.addListener(marker, 'click', function() {
 //  this.infowindow.open(map, this);
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
        //console.log(window);
        initMap(response.lat, response.lng)
    })
}

$scope.getTrails = service.getStateTrails($stateParams.state).then(function(res){
  //console.log(res);
  for (var i=0; i < res.length; i++){
    createMarker(res[i]);
  }

  function createMarker(re){
    var marker = new google.maps.Marker({
      title: re.name,
      position: {
        lat: re.lat,
        lng: re.lon
      },
      // infowindow: infowindow,
      map: map
    })

    var infowindow = new window.google.maps.InfoWindow({
      //content: title
     // console.log(marker)

   })
   marker.addListener('mouseover', function(){
     infowindow.setContent(re.name + "<br>" + re.city);
     //console.log(infowindow);
     infowindow.open(map, this);
   })
   marker.addListener('mouseout', function(){
     infowindow.setContent(re.name);
     //console.log(infowindow);
     infowindow.close(map, this);
   })
  }
//     var lat = res[i].lat
//     var lng = res[i].lon
//     var title = res[i].name
//     var infowindow = new google.maps.InfoWindow({
//       //content: title
//      // console.log(marker)
//
//    })
//     // var latLng = new google.maps.LatLng(lat, lng);
//     var marker = new google.maps.Marker({
//       title: title,
//       position: {
//         lat: lat,
//         lng: lng
//       },
//       infowindow: infowindow,
//       map: map
//     })
//
// }


})
});
// console.log($scope.getTrails)
