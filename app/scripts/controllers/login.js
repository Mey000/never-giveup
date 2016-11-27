angular.module('quexianguanliApp').controller('loginCtrl', ['$rootScope','$scope', '$state', '$http', function($rootScope,$scope, $state, $http) {
	
	
	
	
	
	$scope.isno = false;
	$scope.isno = false;
	$scope.submit = function() {
		if(zh_text.value==''||zh_password.value==''){
//			$scope.un = true;
		}else{
			if((/^[a-zA-Z]+$/.test(zh_text.value) || /^1[34578]{1}\d{9}$/.test(zh_text.value) || /![@#\$%\^&\*]+/g.test(zh_text.value) && zh_text.value!='') && (/[a-z0-9_]{6,12}$/g.test(zh_password.value) && zh_password.value!='' )){
//				$scope.un = false;
				$http({
					url: "http://www.bugcenter.com.cn:1511/users/login",
					method: "post",
					data: $scope.upuser
				}).success(function(e) {
					$scope.un = false;
	//				$rootScope.user={};
	//				$rootScope.user.username=$scope.upuser.username;
	//				$rootScope.user.uid = e.uid;
					$state.go('UI');	
				})
			}
		}
		
			
	}
//		监听事件
		//$scope.un=true;  
	    $scope.upuser="";  
	    $scope.mobileVal=function(){  
	        return $scope.upuser;  
	    };  
	    $scope.$watch($scope.mobileVal,function(newValue,oldValue){  
	        var regex = /^[a-zA-Z]+$/ ;  
	        if(regex.test(newValue)){  
	            $scope.un=false;  
	        }else{  
	            $scope.un=true;  
	        }  
	    },true);  
	    
	//用户判断
	var zh_word, zh_words = false;
	zh_text.onblur = function() {
		if(/^[a-zA-Z]+$/.test(zh_text.value) || /^1[34578]{1}\d{9}$/.test(zh_text.value) || /![@#\$%\^&\*]+/g.test(zh_text.value) && zh_text.value!='') {
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