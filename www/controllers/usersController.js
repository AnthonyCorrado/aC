angular.module('UserController', [])

.controller('UserController', ['$scope', '$firebase', function($scope, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    // baseRef.child('bars/1/users').push(
    //     {
    //         "fname": "Anthony",
    //         "lname": "Corrado",
    //         "username": "T-Beni",
    //         "password": "dkjfer9erereruoerovkjca"
    //     }
    // );

}]);