angular.module('NotificationController', [])

.controller('NotificationController', ['$scope', '$firebase', '$timeout', function($scope, $firebase, $timeout) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/1/notifications').on("value", function(snapshot) {
        console.log(snapshot.val());
        $timeout(function() {
            $scope.notifications = snapshot.val();
        }, 200);
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

}]);