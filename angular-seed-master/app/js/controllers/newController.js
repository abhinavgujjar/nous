'use strict';

angular.module('myApp.controllers')
	.controller('newController', ['$scope', 
		function($scope) {
			$scope.addCourse = function(course){
				console.log(course);
			}
		}
	]);