angular.module('NotificationDetailController', [])

.controller('NotificationDetailController', ['$scope', '$timeout', '$firebase', 'HelperService', 'DatabaseService', '$stateParams', function($scope, $timeout, $firebase, HelperService, DatabaseService, $stateParams) {
    var notifRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/notifications/" + $stateParams.notificationId);

    console.log($stateParams.notificationId);
    DatabaseService.getNotificationById($stateParams.notificationId)
        .then(function(response) {
            console.log(response);
            $scope.notification = response;
        });

}]);