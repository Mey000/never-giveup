angular.module('quexianguanliApp').controller('loginCtrl', ['$rootScope','$scope', '$state', '$http', function($rootScope,$scope, $state, $http) {
	$scope.submit = function() {
		$http({
			url: "http://www.bugcenter.com.cn:1511/users/login",
			method: "post",
			data: $scope.upuser
		}).success(function(e) {
			$rootScope.user={};
			$rootScope.user.username=$scope.upuser.username;
			$rootScope.user.uid = e.uid;
			$state.go('UI');

		})
	}

	var zh_word, zh_words = false;
	zh_text.onblur = function() {
		if(/^[^\u4e00-\u9fa5]{0,}$/.test(zh_text.value)) {
			zh_word = true;
			this.onfocus = function() {
				zh_text.value = zh_text.value;
			}
		} else {
			zh_text.value = "请输入正确的用户名";
			this.onfocus = function() {
				zh_text.value = '';
			}
		}
	}
}])