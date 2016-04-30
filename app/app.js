'use strict';
(function () {
    /* this file contains all configurations */
    var app = angular.module('myBdayWish', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "./app/main/welcome.html",
                controller: "welcomeController"
            })
            .when("/MyList", {
                templateUrl : "./app/Birthdee/birthdee.html",
                controller: "birthdeeController"
            })
            .when("/Genie", {
                templateUrl : "./app/genie/genie.html",
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
