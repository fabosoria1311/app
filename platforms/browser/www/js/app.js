//angular.module("EtaApp", [ "ngRoute" ]);

var climbApp = angular.module("ClimbApp", [ "ngRoute", 'ngAnimate' ]);

angular.module('scrollDemo', [ 'ui.router', 'ngAnimate' ]);

climbApp.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);

climbApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "app/views/region.html",
		controller : 'DataCtrl'
	}).when("/login", {
		templateUrl : "app/views/login.html",
		controller : 'DataCtrl'
	}).when("/home", {
		templateUrl : "app/views/home.html",
		controller : 'DataCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
