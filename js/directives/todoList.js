angular.module('todoApp')
    .directive('todoList', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'js/templates/todo-list.html',
            link: function(scope, element, attrs, fn) {


            }
        }
    });