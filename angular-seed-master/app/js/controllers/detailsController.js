'use strict';

angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', '$routeParams', 
		function($scope, courseProvider, $routeParams) {

			var id = $routeParams.courseId;

			$scope.course = courseProvider.getCourse(id);

			$scope.addReview = function(review){
				var fresh = angular.copy(review, fresh);

				if (!$scope.course.reviews ){
					$scope.course.reviews = [];
				}

				$scope.course.reviews.push(fresh);
			}			

		}
	]);