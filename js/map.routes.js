angular.module('routing').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
	$stateProvider
		.state('maps', {
			url: '/',
			controller: 'mainCtrl',
			templateUrl: '/js/maps.html',
		})
});
