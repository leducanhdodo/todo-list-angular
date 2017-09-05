angular.module('todoApp')
	.controller('TodoCtrl', function ($scope) {
		'use strict';
		$scope.lists = [];
        $scope.selectedCount = 0;
		$scope.newItem = null;
		$scope.allChecked = false;

		$scope.addList = function () {
			if ($scope.newItem) {
				$scope.lists.push({
					title: $scope.newItem,
					completed: false
				});
                $scope.newItem = null;
			}
        };

        $scope.removeItem = function (index) {
            $scope.lists.splice(index, 1);
        };

        $scope.toggleStatus = function (index) {
        	/*var b = $scope.lists[index].completed;
            $scope.lists[index].completed = !b;*/
        };

        $scope.markAllAsCompleted = function () {
			for (var i = 0; i < $scope.lists.length; i++) {
				$scope.lists[i].completed = $scope.allChecked;
			}
			if ($scope.allChecked) {
                $scope.selectedCount = $scope.lists.length;
			} else {
				$scope.selectedCount = 0;
			}
        };

        $scope.check = function(index) {
            if ($scope.lists[index].completed) {
                $scope.selectedCount ++;
			} else {
                $scope.selectedCount --;
			}
        };

        $scope.deleteSelected = function() {
            $scope.selectedCount = 0;
            for (var i = 0; i < $scope.lists.length; i++) {
                if ($scope.lists[i].completed) {
                    $scope.lists.splice(i, 1);
                    i--;
				}
            }
        };
	});
