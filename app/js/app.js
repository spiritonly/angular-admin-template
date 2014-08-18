'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/dashboard', {templateUrl: 'ajax/dashboard.html', controller: 'Price'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('deviceManage', [
    'ngRoute',
    'deviceManage.controllers'
]).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/dashboard', {templateUrl: 'ajax/dashboard.html'});
    $routeProvider.when('/preloader', {templateUrl: 'ajax/preloader.html'});
    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);