angular.module('quexianguanliApp').filter('mky', function() {
	return function(e, page, size) {
		if(e) {
			var start = page * size;
			var end = (page + 1) * size
			return e.slice(start, end)
		}
	}
}).controller('UICtrl', ['$scope', '$state', '$http', '$rootScope', 'locals', function($scope, $state, $http, $rootScope, locals) {
	$scope.fn = function(e) {
		$scope.s = e
	}

	$http({
		url: "http://www.bugcenter.com.cn:1511/users/" + locals.get("uid", ""),
		method: "get"
	}).success(function(e) {
		if(locals.get("name", "") == 0) {
			$scope.name = "ui设计"
		}
		if(locals.get("name", "") == 1) {
			$scope.name = "前端"
		}
		if(locals.get("name", "") == 2) {
			$scope.name = "后台"
		}
		$scope.username=locals.get("username", "")

	})
	$scope.size = 3;
			$scope.a = 0;
	$http({
			url: "http://www.bugcenter.com.cn:1511/item",
			method: "get",
			params: {
				'to': locals.get("username", "")
			}
		}).success(function(e) {

			$scope.data = e
			var num= $scope.data.length;
			//console.log($scope.datat)
			
			$scope.zy = function(n) {
				
				$http({
					url: "http://www.bugcenter.com.cn:1511/item/"+n,
					method: "get"
				}).success(function (e) {
					//console.log(e)
					$scope.e=e;
					
				if(e.importance == 0) {
					e.importance = "重要";
				} else if(e.importance == 1) {
					e.importance = "中等";
				} else if(e.importance == 2) {
					e.importance = "一般";
				}
				//错误的状态
				if(e.status == 0) {
					e.status = "已指派";

				} else if(e.status == 1) {
					e.status = "已解决";

				} else {
					e.status = "已关闭";

				}
				//发生频率
				if(e.frequency == 0) {
					e.frequency = "偶尔";
				}
				if(e.frequency == 1) {
					e.frequency = "经常 ";
				}
			
					
					
				})
				$scope.jiejue = function(a) {
					$http({
						url: "http://www.bugcenter.com.cn:1511/item/" + a,
						method: "put",
						data: {
							status: 1
						}
					}).success(function(e) {
						//console.log(e)
					})
				}
			}
			for(var i = 0; i < e.length; i++) {
				if(e[i].importance == 0) {
					e[i].importance = "重要";
				} else if(e[i].importance == 1) {
					e[i].importance = "中等";
				} else if(e[i].importance == 2) {
					e[i].importance = "一般";
				}
				//错误的状态
				if(e[i].status == 0) {
					e[i].status = "已指派";

				} else if(e[i].status == 1) {
					e[i].status = "已解决";

				} else {
					e[i].status = "已关闭";

				}
				
			}
			
			
			
			$scope.hhh = Math.ceil(num / $scope.size)
				console.log($scope.data.length)
				//	console.log($scope.datalen)
			$scope.prev = function() {
				$scope.a--
					if($scope.a < 0) {
						$scope.a = 0
					}
			}
			$scope.next = function(e) {
				$scope.a++
					if($scope.a > $scope.hhh - 1) {
						$scope.a = $scope.hhh - 1
					}
			}
			
		})
		
		//console.log($scope.datat)

	$(".y_nav p").click(function() {
		$(".y_nt").toggle();
	});
	$scope.tc = function() {
		$state.go('login')
		localStorage.clear()
	}


}]).filter("substr", function() {
	return function(e) {
		if(e != "") {
			if(e.length > 40) {
				return e.slice(0, 40) + "..."
			} else {
				return e
			}

		} else {
			return e
		}
	}

})




