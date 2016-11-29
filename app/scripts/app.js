'use strict';

/**
 * @ngdoc overview
 * @name quexianguanliApp
 * @description
 * # quexianguanliApp
 *
 * Main module of the application.
 */
(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colors : [ '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
}); 
angular
  .module('quexianguanliApp', ['ui.router','textAngular','chart.js']).config(['$stateProvider','$urlRouterProvider','ChartJsProvider',function($stateProvider,$urlRouterProvider,ChartJsProvider){
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
		templateUrl:"views/background.html",
		controller:"bgdCtrl"
	}).state("list",{
		url:"/list",
		templateUrl:"views/list.html",
		controller:"listCtrl"
	}).state("chart",{
		url:"/chart",
		templateUrl:"views/chart.html",
		controller:"chartCtrl"
	})
	
}]);

	
