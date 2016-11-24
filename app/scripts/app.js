'use strict';

/**
 * @ngdoc overview
 * @name quexianguanliApp
 * @description
 * # quexianguanliApp
 *
 * Main module of the application.
 */
angular
  .module('quexianguanliApp', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$stateProvider.state("login",{
		url:"/login",
		templateUrl:"views/login.html",
		controller:"login_test"
	})
	.state("test",{
		url:"/test",
		templateUrl:"views/test.html",
		controller:"con_test"
	})
$urlRouterProvider.otherwise('/test');
}]);