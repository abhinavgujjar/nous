'use strict';

angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider',
		function($scope, courseProvider) {
			$scope.course = courseProvider.getCourses()[2];

		}
	]);