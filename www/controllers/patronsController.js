angular.module('PatronController', [])

.controller('PatronController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.patrons = [
        {
            "fname": "anthony",
            "lname": "corrado",
            "emailNotif": "true",
            "textNotif": "true",
            "email": "anthonymcorrado@gmail.com",
            "phone": "555-555-5555"
        },
        {
            "fname": "anthony",
            "lname": "corrado",
            "emailNotif": "true",
            "textNotif": "true",
            "email": "anthonymcorrado@gmail.com",
            "phone": "555-555-5555"
        },
        {
            "fname": "anthony",
            "lname": "corrado",
            "emailNotif": "true",
            "textNotif": "true",
            "email": "anthonymcorrado@gmail.com",
            "phone": "555-555-5555"
        },
        {
            "fname": "anthony",
            "lname": "corrado",
            "emailNotif": "true",
            "textNotif": "true",
            "email": "anthonymcorrado@gmail.com",
            "phone": "555-555-5555"
        }
    ];

    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);
}]);