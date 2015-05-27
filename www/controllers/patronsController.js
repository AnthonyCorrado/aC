angular.module('PatronController', [])

.controller('PatronController', ['$scope', '$timeout', '$firebase', function($scope, $timeout, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/0/patrons').on("value", function(snapshot) {
          console.log(snapshot.val());
          $timeout(function() {
            console.log(snapshot.val());
            $scope.patrons = snapshot.val();
        },200);
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
    });

    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);
}]);