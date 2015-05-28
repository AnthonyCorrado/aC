angular.module('NotificationDetailController', [])

.controller('NotificationDetailController', [
    '$scope',
    '$firebase',
    '$location',
    'HelperService',
    '$stateParams',
    'NotificationService',
    'BeerService',
    'PatronService',
function($scope, $firebase, $location, HelperService, $stateParams, NotificationService, BeerService, PatronService) {

    var notifRef = new Firebase("https://ale-chimp.firebaseio.com/bars/0/notifications/" + $stateParams.notificationId);

    NotificationService.getNotificationById($stateParams.notificationId)
        .then(function(response) {
            BeerService.getBeerById(response.beerId)
                .then(function(beerObj) {
                    $scope.beer = beerObj;
                });
            getSubPatronsNames(response.patrons);
            $scope.notification = response;
        });

    var getSubPatronsNames = function(subs) {
        var subPatrons = [];
        _.forEach(subs, function(key) {
            PatronService.getPatronById(key)
                .then(function(response) {
                    subPatrons.push(response);
                    $scope.subPatrons = subPatrons;
                });
            
        });
    };
}]);