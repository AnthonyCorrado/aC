angular.module('PatronController', [])

.controller('PatronController', ['$scope', '$timeout', '$firebase', 'PatronService', '$ionicHistory', function($scope, $timeout, $firebase, PatronService, $ionicHistory) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    PatronService.getAllPatrons()
        .then(function(data) {
            console.log(data);
            $scope.patrons = data;
        });

        $ionicHistory.clearCache();
    // $timeout(function() {
    //     $scope.floatedLeft = "floated-left";
    // }, 100);
}]);