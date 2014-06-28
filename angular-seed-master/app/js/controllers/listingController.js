'use strict';

angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'version',
		'courseProvider', '$location',
		function($scope, version, courseProvider, $location) {

			$scope.message = version;
			$scope.courses = courseProvider.getCourses();

			$scope.selectCourse = function(course){
				courseProvider.selectedCourse = course;
				$location.url('/details');
			};
		}
	]);