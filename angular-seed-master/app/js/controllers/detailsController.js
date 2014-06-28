'use strict';

angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', '$routeParams', 
		function($scope, courseProvider, $routeParams) {

			var id = $routeParams.courseId;

			$scope.course = courseProvider.getCourse(id);

		}
	]);