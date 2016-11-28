angular.module('quexianguanliApp').controller("testCtrl",['$scope','$state','$http','$rootScope','locals',function($scope,$state,$http,$rootScope,locals){
	console.log(locals.get("uid",""));
  $http({
    url:"http://www.bugcenter.com.cn:1511/users/"+locals.get("uid",""),
    method:"get"
  }).success(function(e){
    if(e.charactor==3){
      $scope.isshow=true
    }
  })
  console.log(locals.get("username",""));
  $http({
    url:"http://www.bugcenter.com.cn:1511/item",
    method:"get",
    params:{'to':locals.get("username","")}
  }).success(function(e){
    $scope.data=e
  })
  $scope.xiufu=function(n){
  	 $http({
    url:"http://www.bugcenter.com.cn:1511/item"+n,
    method:"put"
  }).success(function(e){
   console.log(e)
  })
  }
  
  $scope.choose=function(e,t){
  	//console.log($(e.target).parents('.bug_row').find('.col-xs-3 b').html())
	$scope.titler=$(e.target).parents('.bug_row').find('.col-xs-3 b').html();
  	$scope.isopen=true;
  	$scope.num=t;
  	console.log($scope.num)
  }
   $scope.isclose=function(e){
   	$scope.isopen=false;
   }
   $scope.commit=function(){
	    $http({
	    url:"http://www.bugcenter.com.cn:1511/item",
	    method:"post",
	    data:$scope.m
	  }).success(function(e){
	    $scope.data=e
	  })
   }
   //  将数据展示到input框中
    // 同时，将特殊字符转化为 0 1 2 并传 到数组 $scope.m={} 中，以便提交给后台
     $scope.m={}
   $scope.output=function(e){
   	$scope.isopen=false;
   if($scope.titler=='summary'){$scope.m.summary=$(e.target).html()}
   if($scope.titler=='description'){$scope.m.description=$(e.target).html()}
   
   if($scope.titler=='classify'){
   		$scope.classify=$(e.target).html()
   		if ($scope.classify=="UI设计") {
   			$scope.m.classify=0
   		} else if ($scope.classify=="前端"){
   			$scope.m.classify=1
   		}	else if ($scope.classify=="前端"){
   			$scope.m.classify=2
   		}
   }
   if($scope.titler=='importance'){
   		$scope.importance=$(e.target).html()
		   	if ($scope.importance=="重要") {
		   			$scope.m.importance=0
		   		} else if ($scope.importance=="中等"){
		   			$scope.m.importance=1
		   		}	else if ($scope.importance=="一般"){
		   			$scope.m.importance=2
		   		}
   }
   if($scope.titler=='frequency'){
   		$scope.frequency=$(e.target).html()
	   		if ($scope.frequency=="高") {
	   			$scope.m.frequency=0
	   		}else if($scope.frequency=="低"){
	   			$scope.m.frequency=1
	   		}
   }
   if($scope.titler=='to'){$scope.m.to=$(e.target).html()}
   
   if($scope.titler=='status'){
   		$scope.status=$(e.target).html()
		   	if ($scope.status=="已指派") {
		   			$scope.m.status=0
		   		} else if ($scope.status=="已解决"){
		   			$scope.m.status=1
		   		}	else if ($scope.status=="已关闭"){
		   			$scope.m.status=2
		   		}
   }
   }
   $scope.list=[
  	{'content':[]},
  	{'content':[{'content1':'UI设计'},{'content1':'前端'},{'content1':'后台'}]},
  	{'content':[{'content1':'重要'},{'content1':'中等'},{'content1':'一般'}]},
  	{'content':[]},
  	{'content':[{'content1':'高'},{'content1':'低'}]},
  	{'content':[]},
  	{'content':[{'content1':'lnn'},{'content1':'jgr'},{'content1':'wyc'},{'content1':'csd'}]},
  	{'content':[{'content1':'已指派'},{'content1':'已解决'},{'content1':'已关闭'}]},
  	]
 // 发布时间  
   $scope.showtime=function(){
   		var now=new Date();
   	$scope.m.date=now.toLocaleString()
   	console.log($scope.m.date)
   }
   
   
//   发布人
	$scope.m.from=locals.get("username","")
}])
