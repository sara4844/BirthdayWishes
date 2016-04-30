'use strict';
(function () {
    /* this file contains all configurations */
    var app = angular.module('myBdayWish', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "./main/welcome.html",
                controller: "welcomeController"
            })
            .when("/MyList", {
                templateUrl : "./Birthdee/birthdee.html",
                controller: "birthdeeController"
            })
            .when("/Genie", {
                templateUrl : "./genie/genie.html",
                controller: "genieController"
            })
            .otherwise({redirectTo: '/'});
    }]);
/* scope accesses the view that we wish to modify
    app.controller('myCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.createBdayList = function() {
            //$location.url('/BirthdeeView');
        }
    }]);
*/
}());
