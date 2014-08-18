'use strict';

angular.module('angularAdmin', [
    'ui.router',
    'angularAdmin.controllers'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index',{
        url: "/",
        views:{
            "navbar": {templateUrl: "partials/navbar.html"}
        }
    });
}]).run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);