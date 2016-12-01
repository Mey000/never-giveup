angular.module('quexianguanliApp')
.controller('chartCtrl',['$scope','$state','$http','locals','$rootScope',function($scope,$state,$http,locals,$rootScope){
	$scope.username=locals.get("username","");
		  $(".y_nav p").click(function(){
				$(".y_nt").toggle();
			});
		  $scope.tc=function(){
		  	$state.go('login')
		  }
	var i0=0,i1=0,i2=0,f0=0,f1=0,s0=0,s1=0,s2=0;	  
		$http({
		    url:"http://www.bugcenter.com.cn:1511/item",
		    method:"get"
		  }).success(function(e){
		  	$scope.labels = ["重要", "中等", "一般"];
		  	$scope.labels2 = ["偶尔", "经常"];
		  	$scope.labels3 = ["已指派", "已解决", "已关闭"];
		  	for (var i=0;i<e.length;i++) {
		  		if(e[i].importance==0){i0++}
		  		if(e[i].importance==1){i1++}
		  		if(e[i].importance==2){i2++}
		  		if(e[i].frequency==0){f0++}
		  		if(e[i].frequency==1){f1++}
				if(e[i].status==0){s0++}
		  		if(e[i].status==1){s1++}
		  		if(e[i].status==2){s2++}
		  		console.log(s2)
		  		if(s2>0){
			$rootScope.importance=[i0,i1,i2];
		  	$rootScope.frequency=[f0,f1];
		  	$rootScope.status=[s0,s1,s2];
		  	console.log($rootScope.importance)
		  	console.log($rootScope.frequency)
		  	console.log($rootScope.status)
		  }
		  	}
		  })
}])
