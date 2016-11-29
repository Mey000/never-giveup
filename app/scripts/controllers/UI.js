angular.module('quexianguanliApp').filter('mky',function(){
			return function(e,page,size){
				if(e){
				var start=page*size;
				var end=(page+1)*size
				return e.slice(start,end)
				}
			}
		}).controller('UICtrl',['$scope','$state','$http','$rootScope','locals',function($scope,$state,$http,$rootScope,locals){
			$scope.fn=function(e){
				$scope.s=e
			}
			
			
			
			
			
		$http({
    		url:"http://www.bugcenter.com.cn:1511/users/"+locals.get("uid",""),
    		method:"get"
  		}).success(function(e){
    		if(locals.get("name","")==0){
    			$scope.name="ui设计"
    		}
    		if(locals.get("name","")==1){
    			$scope.name="前端"
    		}
    		if(locals.get("name","")==2){
    			$scope.name="后台"
    		}
    		
  		})
		  $http({
		    url:"http://www.bugcenter.com.cn:1511/item",
		    method:"get",
		    params:{'to':locals.get("username","")}
		  }).success(function(e){
		  	
			 $scope.data=e
			 
			 //console.log($scope.datat)
			 $scope.size=3;
			$scope.a=0;
			$scope.hhh = Math.ceil($scope.data.length/$scope.size)
			//console.log(/*$scope.Le*/$scope.data.length)
			//	console.log($scope.datalen)
			$scope.prev=function(){
				$scope.a--
				if($scope.a<0){
					$scope.a=0
				}
			}
			$scope.next=function(e){
				$scope.a++
				if($scope.a>$scope.hhh-1){
					$scope.a=$scope.hhh-1
				}
			}
			 $scope.zy=function(n){
			 	$scope.aaa=e[n]
			 	$scope.summary=$scope.aaa.summary;
			 	$scope.description=$scope.aaa.description;
			 	$scope.importance=$scope.aaa.importance;
			 	$scope.frequency=$scope.aaa.frequency;
			 	$scope.status=$scope.aaa.status;
			 	$scope.from=$scope.aaa.from;
			 	$scope.date=$scope.aaa.date;
			 	$scope.id=$scope.aaa.id;
			 	$scope.jiejue=function(a){
			 		$http({
				    url:"http://www.bugcenter.com.cn:1511/item/"+a,
				    method:"put",
				    data:{status:1}
				  }).success(function(e){
				  		//console.log(e)
				})
			 }
			}
			 for(var i=0;i<e.length;i++){
			 	if(e[i].importance==0){
				 	e[i].importance="重要";
				 }else if(e[i].importance==1){
				 	e[i].importance="中等";
				 }else if(e[i].importance==2){
				 	e[i].importance="一般";
				 }
				 //错误的状态
		    	if(e[i].status==0){
		    		e[i].status="已指派";
		    		
		    		
		    	}else if(e[i].status==1){
		    		e[i].status="已解决";
		    		
		    		
		    	}else{
		    		e[i].status="已关闭";

		    	}
		    	//发生频率
		    	if(e[i].frequency==0){
		    		e[i].frequency="偶尔";
		    	}
		    	if(e[i].frequency==1){
		    		e[i].frequency="经常 ";
		    	}
			 }
		  })
		   //console.log($scope.datat)

		  $(".y_nav p").click(function(){
				$(".y_nt").toggle();
			});
		  $scope.tc=function(){
		  	$state.go('login')
		  	localStorage.clear()
		  }

		 
		
		

		  

}]).filter("substr",function(){
	return function(e){
		if(e!=""){
			if(e.length>40){
					return e.slice(0,40)+"..."
				}else{
					return e
				}
				
			}else{
				return e
			}
		}
	
	})






