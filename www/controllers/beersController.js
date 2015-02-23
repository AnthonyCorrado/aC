angular.module('BeerController', [])

.controller('BeerController', ['$scope', '$timeout', '$firebase', function($scope, $timeout, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/1/beers').on("value", function(snapshot) {
          console.log(snapshot.val());
          $scope.beers = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });

    // baseRef.child('bars/1/beers').push({
    //     "name": "Sam Adams",
    //     "style": "Lager",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "90 Minute IPA",
    //     "style": "IPA",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "Young's Double Chocolate Stout",
    //     "style": "Stout",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/y6ToYBPBAI0FNpd/porter.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "Sculpin IPA",
    //     "style": "IPA",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "Sam Adams",
    //     "style": "Lager",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "90 Minute IPA",
    //     "style": "IPA",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/scaBy4snIEefdvc/brown.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "Young's Double Chocolate Stout",
    //     "style": "Stout",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/y6ToYBPBAI0FNpd/porter.png"
    // });
    // baseRef.child('bars/1/beers').push({
    //     "name": "Sculpin IPA",
    //     "style": "IPA",
    //     "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png"
    // });

    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);

}]);