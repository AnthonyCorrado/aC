angular.module('BeerDetailController', [])

.controller('BeerDetailController', function($scope, $stateParams) {

    var beerRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/beers/" + $stateParams.beerId);

        beerRef.once('value', function(snapshot) {
            patronArray = [];
            $scope.thisBeer = snapshot.val();
        });

});