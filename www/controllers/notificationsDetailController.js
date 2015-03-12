angular.module('NotificationDetailController', [])

.controller('NotificationDetailController', ['$scope', '$timeout', '$firebase', 'HelperService', 'DatabaseService', '$stateParams', function($scope, $timeout, $firebase, HelperService, DatabaseService, $stateParams) {
    var notifRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/notifications/" + $stateParams.notificationId);

    DatabaseService.getNotificationById($stateParams.notificationId)
        .then(function(response) {
            DatabaseService.getBeerById(response.beerId)
                .then(function(beerObj) {
                    $scope.beer = beerObj;
                });
            getSubPatronsNames(response.patrons);
            $scope.notification = response;
        });

    var getSubPatronsNames = function(subs) {
        var subPatrons = [];
        _.forEach(subs, function(key) {
            DatabaseService.getPatronById(key)
                .then(function(response) {
                    subPatrons.push(response);
                    $scope.subPatrons = subPatrons;
                });
            
        });
    };
}]);