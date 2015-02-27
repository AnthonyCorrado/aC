angular.module('PatronDetailController', [])

.controller('PatronDetailController', function($scope, $stateParams) {

    var baseRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/patrons/" + $stateParams.patronId);
        baseRef.once('value', function(snapshot) {
            $scope.thisPatron = snapshot.val();
            console.log(snapshot.val());
    });
});