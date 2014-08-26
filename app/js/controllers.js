'use strict';

/* Controllers */

angular.module('angularAdmin')
    .controller('DashbaordCtrl', ['$scope', 'contentHeader', function($scope, contentHeader) {
        contentHeader.bigTitle = "Dashboard";
        contentHeader.smallTitle = "Control Panel";
        $scope.header = contentHeader;

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
        $scope.lineChart = {
            resize: true,
            data: [
                {y: '2011 Q1', item1: 2666},
                {y: '2011 Q2', item1: 2778},
                {y: '2011 Q3', item1: 4912},
                {y: '2011 Q4', item1: 3767},
                {y: '2012 Q1', item1: 6810},
                {y: '2012 Q2', item1: 5670},
                {y: '2012 Q3', item1: 4820},
                {y: '2012 Q4', item1: 15073},
                {y: '2013 Q1', item1: 10687},
                {y: '2013 Q2', item1: 8432}
            ],
            xkey: 'y',
            ykeys: ['item1'],
            labels: ['Item 1'],
            lineColors: ['#efefef'],
            lineWidth: 2,
            hideHover: 'auto',
            gridTextColor: "#fff",
            gridStrokeWidth: 0.4,
            pointSize: 4,
            pointStrokeColors: ["#efefef"],
            gridLineColor: "#efefef",
            gridTextFamily: "Open Sans",
            gridTextSize: 10
        };

        $scope.emailContent = "send me an email!";

        $scope.date = new Date();

        $scope.dateRangePickerOpts = {
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                'Last 7 Days': [moment().subtract('days', 6), moment()],
                'Last 30 Days': [moment().subtract('days', 29), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            },
            startDate: moment().subtract('days', 29),
            endDate: moment()
        };

        $scope.onDateChange = function(start, end){
            alert(moment(start).format('MMMM D, YYYYY')
            + ' - ' + moment(end).format('MMMM D, YYYY'));
        };

        $scope.mailOrders = 20;
        $scope.online = 50;
        $scope.inStore = 70;
        $scope.knobOptions = {
            'width': 60,
            'height': 60,
            'readOnly': true,
            'fgColor': "#39CCCC"
        };
    }]).controller('MenuCtrl', function($scope, $state) {
        $scope.menus = [{
            selected: true,
            fontIcon: "fa fa-dashboard",
            title: "dashboard",
            url: $state.href("index.page", {page: "dashboard"})
        },{
            selected: false,
            fontIcon: "fa fa-th",
            title: "widgets",
            url: $state.href("index.page", {page: "widgets"})
        }];
    });