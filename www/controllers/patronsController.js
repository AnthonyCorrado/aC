angular.module('PatronController', [])

.controller('PatronController', ['$scope', '$timeout', '$firebase', 'PatronService', function($scope, $timeout, $firebase, PatronService) {

    PatronService.getAllPatrons()
        .then(function(data) {
            console.log(data);
            $scope.patrons = data;
        });
}]);