angular.module('NotificationController', [])

.controller('NotificationController', ['$scope', '$firebase', '$timeout', 'HelperService', function($scope, $firebase, $timeout, HelperService) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.child('bars/1/notifications').on("value", function(snapshot) {
        $timeout(function() {
            $scope.notifications = HelperService.getTime(snapshot.val());
        }, 200);
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    // baseRef.child('bars/1/notifications').on("child_added", function(snapshot) {
    //     // HelperService.getTime();
    //     var data = snapshot.val();
    //     var time = data.time;
    //     var timeStamp = moment(time);
    //     console.log(timeStamp._d);
    //     parsedTime = moment(timeStamp._d).format("ddd, MMM Do YYYY, LT");
    //     console.log(parsedTime);
    //     // console.log(snapshot.key());
    //     // var test = snapshot.val();
    //     // console.log(_.keysIn(test));
    //     // var testTime = test['-JjsFm2acRySoLtfJ9DD'].time;
    //     // console.log(testTime);
    //     // console.log(1318781876406);
    //     // var humanTime = moment(testTime);
    //     // console.log(humanTime);

    //     $timeout(function() {
    //         // $scope.notifications = snapshot.val();
    //     }, 200);
    // }, function (errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    // });

}])

.filter('object2Array', function() {
    return function(input) {
      var out = [];
      for(var i in input){
        out.push(input[i]);
      }
      return out;
    };
  });