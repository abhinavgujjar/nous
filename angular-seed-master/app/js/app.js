'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MyCtrl1'});
  $routeProvider.when('/listing', {templateUrl: 'partials/listing.html', controller: 'listingController'});
  $routeProvider.when('/new', {templateUrl: 'partials/new.html', controller: 'newController'});
  $routeProvider.when('/course/:courseId', {templateUrl: 'partials/details.html', controller: 'detailsController'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
