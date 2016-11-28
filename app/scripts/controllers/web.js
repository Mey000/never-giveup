angular.module('quexianguanliApp').controller("webCtrl",['$scope','$state','$http','$rootScope','locals',function($scope,$state,$http,$rootScope,locals){
//	console.log(locals.get("uid",""));
//$http({
//  url:"http://www.bugcenter.com.cn:1511/users/"+locals.get("uid",""),
//  method:"get"
//}).success(function(e){
//  if(e.charactor==3){
//    $scope.isshow=true
//  }
//})
//console.log(locals.get("username",""));
//$http({
//  url:"http://www.bugcenter.com.cn:1511/item",
//  method:"get",
//  params:{'to':locals.get("username","")}
//}).success(function(e){
//  $scope.data=e
//})
$scope.add_bug=function(){
	 $state.go('test')
}

}])
