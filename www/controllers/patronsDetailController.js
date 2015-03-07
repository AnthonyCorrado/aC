angular.module('PatronDetailController', [])

.controller('PatronDetailController', function($scope, $stateParams) {

    var baseRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/patrons/" + $stateParams.patronId);
    var beerRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/beers");

    var getSubBeersNames = function(subs) {
        console.log(subs);
        var subPatrons = [];
        _.forEach(subs, function(id) {
            DatabaseService.getPatronById(id)
                .then(function(response) {
                    subPatrons.push(response);
                    $scope.subPatrons = subPatrons;
                });
            
        });
    };

    baseRef.once('value', function(snapshot) {
        beerArray = [];
        $scope.thisPatron = snapshot.val();

            // // retrieves each beer's details by beers/uniqueId
            // if ($scope.thisPatron.beers) {
            //     for (i=0; i < $scope.thisPatron.beers.length; i++) {
            //         beerRef.child($scope.thisPatron.beers[i]).once('value', function(snapshot) {
            //             console.log(snapshot.val());
            //             beerArray.push(snapshot.val());
            //             $scope.beerDetail = beerArray;
            //         });
            //     }
            // }
    });
});