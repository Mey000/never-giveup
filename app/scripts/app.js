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
  .module('quexianguanliApp', ['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.when("","/login")
	$stateProvider.state("login",{
		url:"/login",
		templateUrl:"views/login.html",
		controller:"loginCtrl",
	})
}]);

	