/* global console*/

'use strict';

angular.module('myApp.controllers')
	.controller('newController', ['$scope', 'courseProvider', '$location',
		function($scope, courseProvider, $location) {
			$scope.addCourse = function(course){
				console.log(course);

				courseProvider.addCourse(course);

				$location.url('/listing');
			};
		}
	]);