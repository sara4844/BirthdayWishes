/**
 * Created by Sa on 4/29/2016.
 */
(function () {
    var app = angular.module('myBdayWish');

    app.controller('welcomeController', ['$scope', '$location', function ($scope, $location) {
        //when the user clicks the button to createlist
        $scope.createBdayList = function () {
            $location.url('MyList');
        }
    }]);
}());
/*
var welcomeController = function ($scope, $location) {
    //when the user clicks the button to createlist
    $scope.createBdayList = function () {
        $location.hash(MyList);
    }
}
*/
//app.controller('welcomeController', welcomeController);
//welcomeController.$inject = ['$scope'];