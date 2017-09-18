angular.module("letsTrek", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/')
$stateProvider
.state('map', {
  url: '/map/:state',
  controller: 'mapsCtrl',
  templateUrl: 'js/maps.html'
})
.state('home', {
  url: '/',
  templateUrl: 'js/home.html',
  controller: 'mainCtrl'
})


})
