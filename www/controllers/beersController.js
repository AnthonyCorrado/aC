angular.module('BeerController', [])

.controller('BeerController', ['$scope', '$timeout', '$firebase', function($scope, $timeout, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/1/beers').on("value", function(snapshot) {
          console.log(snapshot.val());
          $timeout(function() {
            $scope.beers = snapshot.val();
          }, 200);
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });

    // baseRef.child('bars/1/beers').push({
    //     "name": "Sam Adams",
    //     "style": "Lager",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png"
    // });]

    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);

}]);