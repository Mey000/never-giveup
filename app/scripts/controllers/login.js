angular.module('quexianguanliApp').controller('loginCtrl', ['$rootScope','$scope', '$state', '$http', 'locals',function($rootScope,$scope, $state, $http,locals) {
	$scope.isno = false;
	$scope.isno = false;
	$scope.un = true;	
	$scope.submit = function() {
//		console.log('1')
		if(zh_text.value=='' || zh_password.value==''){
			$scope.un = true;			
		}else{
			if((/^[a-zA-Z]+$/.test(zh_text.value) || /^1[34578]{1}\d{9}$/.test(zh_text.value) || /![@#\$%\^&\*]+/g.test(zh_text.value) || /^[0-9a-z_]+@(([0-9a-z]+)[.]){1,2}[a-z]{2,3}$/.test(zh_text.value) && zh_text.value!='') && (/[a-z0-9_]{6,12}$/g.test(zh_password.value) && zh_password.value!='' )){
				$scope.boxa=false;
//				$scope.un = false;
				$http({
					url: "http://www.bugcenter.com.cn:1511/users/login",
					method: "post",
					data: $scope.upuser
				}).success(function(e) {
					$scope.un = false;
					$rootScope.user={};
					$rootScope.user.username=$scope.upuser.username;
					locals.set("username",$scope.upuser.username);
					locals.set("password",$scope.upuser.password);
					locals.set("uid",e.uid);
					$rootScope.user.uid = e.uid;
					$state.go('UI');	
				})
			}
		}
	}
	//监听事件
//		$scope.un=true;  
//	    $scope.upuser="";  
//	    $scope.mobileVal=function(){  
//	        return $scope.upuser;  
//	    };  
//	    $scope.$watch('mobileVal',function(newValue,oldValue){  
//	        var regex = (/^[a-zA-Z]+$/.test(newValue) || /^1[34578]{1}\d{9}$/.test(newValue) || /^[0-9a-z_]+@(([0-9a-z]+)[.]){1,2}[a-z]{2,3}$/.test(newValue) || /![@#\$%\^&\*]+/g.test(newValue) && zh_text.value!='') && (/[a-z0-9_]{6,12}$/g.test(newValue) && newValue!='' ) ; 
//	        console.log(regex)
//	        if(regex){  
//	            $scope.un=false;  
//	        }else{  
//	            $scope.un=true;  
//	        }  
//	    });  
	//用户判断
	var zh_word, zh_words = false;
	zh_text.onblur = function() {
		if(/^[a-zA-Z]+$/.test(zh_text.value) || /^1[34578]{1}\d{9}$/.test(zh_text.value) || /![@#\$%\^&\*]+/g.test(zh_text.value) || /^[0-9a-z_]+@(([0-9a-z]+)[.]){1,2}[a-z]{2,3}$/.test(zh_text.value) && zh_text.value!='') {
			zh_word = true;	
			yes.style.display="block";
			this.onfocus = function() {
				zh_text.value = zh_text.value;
				yes.style.display="none";
			}					
		} else {			
			no.style.display="block";			
			this.onfocus = function() {
				zh_text.value = '';
				no.style.display="none";
			}
		}		
	}
	//密码判断
	var zh_word, zh_words = false;
	zh_password.onblur = function() {
		if(/[a-z0-9_]{6,12}$/g.test(zh_password.value) && zh_password.value!='' ) {
			zh_word = true;	
			yesa.style.display="block";
			this.onfocus = function() {
				zh_password.value = zh_password.value;
				yesa.style.display="none";
			}					
		} else {			
			noa.style.display="block";			
			this.onfocus = function() {
				zh_password.value = '';
				noa.style.display="none";
			}
		}		
	}
	
}])
.factory('locals',['$window',function($window){
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
