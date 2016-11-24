angular.module('quexianguanliApp').controller('loginCtrl',['$scope','$http',function($scope,$http){
	$scope.submit = function(){
		$http({
			url:"http://www.bugcenter.com.cn:1511/users/login",
			method: "post",
			data:$scope.upuser
		}).success(function(){
			
		})
	}
}])
