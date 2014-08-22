'use strict';

angular.module('angularAdmin', [
    'ui.router', 'ChartAngular', 'ui.bootstrap'
]).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/pages/dashboard');

    $stateProvider.state('pages',{
        url: "/",
        abstract: true,
        views:{
            "navbar": {templateUrl: "partials/navbar.html"},
            "left-side": {
                templateUrl: "partials/leftSide.html",
                controller: 'MenuCtrl'
            },
            "right-side": {
                templateUrl: "partials/rightSide.html",
                controller: function($scope, $state, contentHeader){
                    $scope.header = contentHeader;
                    $scope.state = $state.current;
                }
            }
        }
    }).state('index.pages', {
        url: "pages/{url}",
        templateUrl: function(stateParams){ return "pages/" + stateParams.url + ".html";},
        controller: function($stateParams, $state) {
            console.log("state hit.");
            $state.go('index.pages.dashboard');
        }
    }).state('pages.dashboard',{
        url: "pages/dashboard",
        templateUrl: "pages/dashboard.html",
        controller: 'DashbaordCtrl'
    }).state('pages.widgets',{
        url: "pages/widgets",
        templateUrl: "pages/widgets.html",
        controller: function(contentHeader){
            contentHeader.bigTitle = "Widgets";
            contentHeader.smallTitle = "Preview page";
        }
    });
}]).run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);