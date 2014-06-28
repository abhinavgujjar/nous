'use strict';

angular.module('myApp.controllers')
	.controller('wishlistController', ['$scope', 'courseProvider', 
		function($scope, courseProvider) {

			$scope.wishlist = courseProvider.wishlist;
	
		}
	]);