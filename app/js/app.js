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
                controller: function($scope){
                    $scope.salesChart = {
                        resize: true,
                        colors: ["#3c8dbc", "#f56954", "#00a65a"],
                        data: [
                            {label: "Download Sales", value: 12},
                            {label: "In-Store Sales", value: 30},
                            {label: "Mail-Order Sales", value: 20}
                        ],
                        hideHover: 'auto'
                    };
                    $scope.revenueChart = {
                        resize: true,
                        data: [
                            {y: '2011 Q1', item1: 2666, item2: 2666},
                            {y: '2011 Q2', item1: 2778, item2: 2294},
                            {y: '2011 Q3', item1: 4912, item2: 1969},
                            {y: '2011 Q4', item1: 3767, item2: 3597},
                            {y: '2012 Q1', item1: 6810, item2: 1914},
                            {y: '2012 Q2', item1: 5670, item2: 4293},
                            {y: '2012 Q3', item1: 4820, item2: 3795},
                            {y: '2012 Q4', item1: 15073, item2: 5967},
                            {y: '2013 Q1', item1: 10687, item2: 4460},
                            {y: '2013 Q2', item1: 8432, item2: 5713}
                        ],
                        xkey: 'y',
                        ykeys: ['item1', 'item2'],
                        labels: ['Item 1', 'Item 2'],
                        lineColors: ['#a0d0e0', '#3c8dbc'],
                        hideHover: 'auto'
                    };
                }
            }
        }
    });
}]).run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);