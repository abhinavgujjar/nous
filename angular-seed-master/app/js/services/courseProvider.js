'use strict';

angular.module('services').
factory('courseProvider', ['$http', '$resource',
	function($http, $resource) {

		var selectedCourse;

		var courseRef = $resource('http://localhost:8000/app/data/courses.json', null, {
			get: {
				method: 'GET',
				isArray: true
			}
		});

		var wishlist = ['C++', 'Delphi'];

		return {
			getCourses: function() {
				return courseRef.get();
			},
			getCourse: function(id) {
				// v	ar selectedCourse;
				// angular.forEach(courses, function(item){
				// 	if ( item.id === id ){
				// 		selectedCourse =  item;
				// 	}
				// });

				// return selectedCourse;
			},
			addCourse: function(course) {
				//courses.push(course);
			},
			selectedCourse: selectedCourse,
			wishlist : wishlist,
			addToWishlist : function(course){
				wishlist.push(course.name);
			}


		};
	}
]);