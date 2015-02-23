angular.module('PatronController', [])

.controller('PatronController', ['$scope', '$timeout', '$firebase', function($scope, $timeout, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/1/patrons').on("value", function(snapshot) {
          console.log(snapshot.val());
          $scope.patrons = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });

    // baseRef.child('bars/1/patrons').push(
    //     {
    //         "fname": "anthony",
    //         "lname": "corrado",
    //         "emailNotif": "true",
    //         "textNotif": "true",
    //         "email": "anthonymcorrado@gmail.com",
    //         "phone": "651-555-5555"
    //     }
    // );
    // baseRef.child('bars/1/patrons').push(
    //     {
    //         "fname": "carla",
    //         "lname": "silvia",
    //         "emailNotif": "true",
    //         "textNotif": "true",
    //         "email": "carlasilvia@gmail.com",
    //         "phone": "949-555-5555"
    //     }
    // );
    // baseRef.child('bars/1/patrons').push(
    //     {
    //         "fname": "lionel",
    //         "lname": "richie",
    //         "emailNotif": "true",
    //         "textNotif": "false",
    //         "email": "hello@gmail.com",
    //         "phone": null
    //     }
    // );


    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);
}]);