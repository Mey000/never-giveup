angular.module('quexianguanliApp').controller('listCtrl',['$scope','$state','$http','$rootScope',function($scope,$state,$http,$rootScope){
	$(".li_nav p").click(function(){
				$(".li_nt").toggle();
				$(".li_box").css("margin-bottom","11.2rem") 
				$(".li_box").css("margin-bottom","2.2rem")

	$http({
			    url:"http://www.bugcenter.com.cn:1511/item",
			    method:"get",
			    params:{'to':$rootScope.user.username}
			  }).success(function(b){

		    	$scope.conten=b[$rootScope.user.indexa];
		    	if($scope.conten.importance==1){
		    		$scope.conten.importance="中等";
		    	}
		    	if($scope.conten.importance==0){
		    		$scope.conten.importance="重要";
		    	}
		    	if($scope.conten.importance==2){
		    		$scope.conten.importance="一般";
		    	}


		    	//错误的状态
		    	if($scope.conten.status==0){
		    		$scope.conten.status="已指派";
		    	}
		    	if($scope.conten.status==1){
		    		$scope.conten.status="已解决 ";
		    	}
		    	if($scope.conten.status==2){
		    		$scope.conten.status="已关闭";
		    	}
		    	//发生频率
		    	if($scope.conten.frequency==0){
		    		$scope.conten.status="偶尔";
		    	}
		    	if($scope.conten.frequency==1){
		    		$scope.conten.status="经常 ";
		    	}
		    	

		  	})
			$scope.tuic=function(){
		  		$state.go('login')
		  }

	})	  
}])