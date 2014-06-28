'use strict';

angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'version',
		'courseProvider',
		function($scope, version, courseProvider) {

			$scope.message = version;
			$scope.courses = courseProvider.getCourses();
		}
	]);