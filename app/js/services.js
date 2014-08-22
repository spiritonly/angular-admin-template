'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('angularAdmin').
    value('version', '0.1')
    .factory('contentHeader', function () {
        var header = {
            bigTitle: "",
            smallTitle: ""
        };

        return header;
    })
