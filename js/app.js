
angular.module('todoApp', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider
			.when('/', {
                templateUrl: 'todo-list-template.html',
                controller: 'TodoCtrl'
            })
			.otherwise({
				redirectTo: '/'
			});
	});
