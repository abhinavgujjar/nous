'use strict';

angular.module('myApp.controllers')
	.controller('coursesController', ['$scope', '$rootScope', 'version',
		'courseProvider', '$location',
		function($scope, $rootScope, version, courseProvider, $location) {

			
			$scope.message = version;
			$scope.courses = courseProvider.getCourses();
			// $scope.courses.$promise.then(function(result){
			// 	$scope.courses = result;
			// }, function(error){
			// 	alert('there was an errro');
			// })

			$scope.selectCourse = function(course){
				courseProvider.selectedCourse = course;
				$location.url('/details');
			};

			$scope.addToWishlist = function(course){
				courseProvider.addToWishlist(course);
				//$scope.wishlist.push({course.name);
			}
		}
	]);