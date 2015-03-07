angular.module('BeerDetailController', [])

.controller('BeerDetailController', function($scope, $stateParams, $ionicModal, DatabaseService, $timeout) {

    var beerRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/beers/" + $stateParams.beerId);
    var patronRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/patrons");

    // get names of subscribed patrons
    var getSubPatronsNames = function(subs) {
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

    // get beer data from Firebase
    beerRef.once('value', function(snapshot) {
        patronArray = [];
        $scope.thisBeer = snapshot.val();
        $scope.drink = snapshot.val();
        $scope.drink.exists = true;
        $scope.drink.heading = "Update Beer";
        var subscribers = _.valuesIn($scope.thisBeer.patrons);
        console.log(subscribers);
        getSubPatronsNames(subscribers);
    });


    $scope.editBeer = function() {
        $ionicModal.fromTemplateUrl('views/partials/beers-form.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.updateBeer = function(drink) {
        DatabaseService.updateBeer(drink, $stateParams.beerId);
    };

});