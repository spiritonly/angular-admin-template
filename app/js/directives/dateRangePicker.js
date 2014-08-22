/**
 * Created by spirit on 2014-08-19.
 */
angular.module('angularAdmin').
    directive('dateRangePicker', ['$window', function($window){
        return {
            restrict : "AE",
            scope: {
                options: '=',
                onChange: '&'
            },
            template : "<i class='fa fa-calendar'></i>",
            link : function(scope, element, attrs, ctrl) {
                $(element).daterangepicker(scope.options, function(start, end){
                    $(element).find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

                    scope.$apply(function(){
                        scope.onChange({start: start, end: end});
                    });
                });
            }
        };
    }]);