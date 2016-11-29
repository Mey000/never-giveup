angular.module('quexianguanliApp').controller("webCtrl",['$scope','$state','$http','$rootScope','locals',function($scope,$state,$http,$rootScope,locals){
	$scope.username=locals.get("username","");
$scope.add_bug=function(){
	 $state.go('test')
}
$scope.show_all_bug=function(){
	 $state.go('bgd')
}
$scope.show_active_bug=function(){
	 $state.go('list')
}
$scope.show_pic_bug=function(){
	 $state.go('chart')
}
 $(".y_nav p").click(function(){
				$(".y_nt").toggle();
			});
}])
