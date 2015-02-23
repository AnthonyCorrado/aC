angular.module('NotificationController', [])

.controller('NotificationController', ['$scope', '$firebase', function($scope, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/1/notifications').on("value", function(snapshot) {
          console.log(snapshot.val());
          $scope.notifications = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });


    // baseRef.child('bars/1/notifications').push(
    //     {
    //         "beer": "90 Minute IPA",
    //         "time": Firebase.ServerValue.TIMESTAMP,
    //         "patrons": [
    //             {
    //                 "id": "-Jiq10_m9xvdAZ0TiVWV"
    //             },
    //             {
    //                 "id": "-Jiq10_m9xvdAZ0TiVWV"
    //             },
    //             {
    //                 "id": "-Jiq10_m9xvdAZ0TiVWV"
    //             },
    //             {
    //                 "id": "-Jiq10_m9xvdAZ0TiVWV"
    //             },
    //         ]
    //     }
    // );

}]);