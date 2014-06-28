'use strict';

angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', '$routeParams', '$route',
		function($scope, courseProvider, $routeParams, $route) {

			var course = courseProvider.selectedCourse;
			if (!course) {
				var id = $routeParams.courseId;
				course = courseProvider.getCourse(id);
			}

			$scope.course = course;

			$scope.addReview = function(review) {
				var fresh = angular.copy(review, fresh);

				if (!$scope.course.reviews) {
					$scope.course.reviews = [];
				}

				$scope.course.reviews.push(fresh);
			}

		}
	]);