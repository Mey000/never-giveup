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
  .module('quexianguanliApp', ['ui.router'])/*.config(routerConfig);
  
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'login'
		})
    
$urlRouterProvider.otherwise('/login');
}*/
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider.state("login",{
		url:"/login",
		templateUrl:"views/con1.html",
		controller:"login"
	})
	$urlRouterProvider.when("","/login")
});