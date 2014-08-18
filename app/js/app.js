'use strict';

angular.module('angularAdmin', [
    'ui.router', 'ChartAngular'
]).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index',{
        url: "/",
        views:{
            "navbar": {templateUrl: "partials/navbar.html"},
            "left-side": {templateUrl: "partials/leftSide.html"},
            "right-side": {
                templateUrl: "partials/rightSide.html",
                controller: 'DashbaordCtrl'
            }
        }
    });
}]).run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);