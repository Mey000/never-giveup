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
		controller:"loginCtrl"
	}).state("test",{
		url:"/test",
		templateUrl:"views/test.html",
		controller:"testCtrl"
	}).state("UI",{
		url:"/UI",
		templateUrl:"views/UI.html",
		controller:"UICtrl"
	}).state("web",{
		url:"/web",
		templateUrl:"views/web.html",
		controller:"webCtrl"
	}).state("bgd",{
		url:"/bgd",
		templateUrl:"views/bgd.html",
		controller:"bgdCtrl"
	})
}]);

	
