angular.module('NotificationController', [])

.controller('NotificationController', ['$scope', '$firebase', '$timeout', 'HelperService', 'DatabaseService', function($scope, $firebase, $timeout, HelperService, DatabaseService) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    // get all notifications
    DatabaseService.getAllNotifs()
        .then(function(data) {
            $scope.notifications = data;
        });

    $scope.sortBy = function(cat) {
        if (cat === $scope.filterVar) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.filterVar = cat;
    };

}])

.filter('object2Array', function() {
    return function(input) {
      var out = [];
      for(var i in input){
        // puts original key into array for using on Angular side
        input[i].key = i;
        out.push(input[i]);
      }
      return out;
    };
  });