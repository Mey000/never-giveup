angular.module('quexianguanliApp').controller('UICtrl',['$scope','$state','$http','$rootScope','locals',function($scope,$state,$http,$rootScope,locals){
	
		$http({
    		url:"http://www.bugcenter.com.cn:1511/users/"+locals.get("uid",""),
    		method:"get"
  		}).success(function(e){
    		console.log(e)
  		})

		  $http({
		    url:"http://www.bugcenter.com.cn:1511/item",
		    method:"get",
		    params:{'to':locals.get("username","")}
		  }).success(function(e){

			 $scope.data=e
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
				  		console.log(e)
					 })

			 }
			}
			 for(var i=0;i<e.length;i++){
			
			 	if(e[i].importance==0){
				 	e[i].importance="重要";
				 	$scope.Name="red";
				 }else if(e[i].importance==1){
				 	e[i].importance="中等";
				 	$scope.Name="yellow";
				 }else if(e[i].importance==2){
				 	e[i].importance="一般";
				 	$scope.Name="blue";
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
		    	//
				
			 }
			 
			 
		  })

		  $(".y_nav p").click(function(){
				$(".y_nt").toggle();
			});
		  $scope.tc=function(){
		  	$state.go('login')
		  }

		  $scope.tiz=function(a){
		  	$rootScope.user={}
			$rootScope.user.indexa=a
			
		  	$state.go('list')
		  	
	  	}
		  
}]).filter("substr",function(){
	return function(e){
	if(e.length>40){
			return e.slice(0,40)+"..."
		}else{
			return e
		}
	}
	}).factory('locals',['$window',function($window){
      return{        //存储单个属性
        set :function(key,value){
          $window.localStorage[key]=value;
        },        //读取单个属性
        get:function(key,defaultValue){
          return  $window.localStorage[key] || defaultValue;
        },        //存储对象，以JSON格式存储
        setObject:function(key,value){
          $window.localStorage[key]=JSON.stringify(value);
        },        //读取对象
        getObject: function (key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }
      }
  }]);


