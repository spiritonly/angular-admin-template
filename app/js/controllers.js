'use strict';

/* Controllers */

angular.module('angularAdmin', ['ChartAngular'])
    .controller('SalesChartCtrl', function($scope) {
        $scope.salesDonut = {
            data: [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ]
        };
        $scope.test = "test chart";
    });