'use strict';

var app = angular.module('mnrhweb', ['ngRoute'])
	/** Set constant CONFIG for app configuration */
	.constant('CONFIG', {
	    'APP_NAME' : 'MNRH Web site',
	    'APP_VERSION' : '1.0.0',
	    'BASE_URL' : window.location.protocol+ '//' +window.location.host+ '/',
	    'SYSTEM_LANGUAGE' : 'TH',
	    'GOOGLE_ANALYTICS_ID' : ''
	})
	/** Route for app */ 
	.config(['$routeProvider', function ($routeProvider) { //config route for app
		$routeProvider.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'HomeController'
		})
		.when('/structure', {
			templateUrl: 'pages/structure.html',
			controller: 'HomeController'
		})
		.when('/vision', {
			templateUrl: 'pages/vision.html',
			controller: 'HomeController'
		})
		.when('/mission', {
			templateUrl: 'pages/mission.html',
			controller: 'HomeController'
		})
		.when('/goal', {
			templateUrl: 'pages/goal.html',
			controller: 'HomeController'
		})
		.when('/service', {
			templateUrl: 'pages/service.html',
			controller: 'HomeController'
		})
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'HomeController'
		})
		.when('/calendar', {
			templateUrl: 'pages/calendar.html',
			controller: 'HomeController'
		})
		.otherwise({
	        redirectTo: '/'
	    });
	}])
	/** Config default header request for app */ 
	/*.config(function ($httpProvider) {
	  	$httpProvider.defaults.headers.common = {};
	  	$httpProvider.defaults.headers.post = {};
	  	$httpProvider.defaults.headers.put = {};
	  	$httpProvider.defaults.headers.patch = {};
	})*/
	/** Inject libraries dependencies for app */ 
	.constant('moment', moment)
	.constant('toastr', toastr)
	.factory('_', ['window', function () {
		return window._;
	}])
	/** Create controller for app */
	// .controller('ModalInstanceCtrl', function ($uibModalInstance, data) {
	//   	var pc = this;
	//   	pc.data = data;
	  
	//   	pc.ok = function () {
	//     	alert("You clicked the ok button."); 
	//     	$uibModalInstance.close();
	//   	};

	//   	pc.cancel = function () {
	//     	alert("You clicked the cancel button."); 
	//     	$uibModalInstance.dismiss('cancel');
	//   	};

	//   	pc.close = function () {
	//     	$uibModalInstance.close();
	//   	};
	// });