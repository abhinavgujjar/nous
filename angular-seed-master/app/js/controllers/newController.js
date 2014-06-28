/* global console*/

'use strict';

angular.module('myApp.controllers')
	.controller('newController', ['$scope', 'courseProvider', '$location', '$route',
		function($scope, courseProvider, $location, $route) {
			$scope.addCourse = function(course) {
				console.log(course);

				courseProvider.addCourse(course);

				$location.url('/listing');

			};
			$scope.refresh = function() {
				$route.reload();
			}
		}
	]);