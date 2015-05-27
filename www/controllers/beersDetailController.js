angular.module('BeerDetailController', [])

.controller('BeerDetailController', function($rootScope, $scope, $stateParams, $ionicModal, DatabaseService, $timeout, BeerService) {

    var beerRef = new Firebase("https://ale-chimp.firebaseio.com/bars/0/beers/" + $stateParams.beerId);
    var patronRef = new Firebase("https://ale-chimp.firebaseio.com/bars/0/patrons");

    // get names of subscribed patrons
    var getSubPatronsNames = function(subs) {
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
        BeerService.updateBeer(drink, $stateParams.beerId);
        $scope.closeModal();
    };

    // ionic modal functions -------------------
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            if($scope.modal) {
                $scope.closeModal();
            }
        });

    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        if($scope.modal) {
            $scope.modal.remove();
            $scope.hideMenu = false;
        }
    });
      // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        $scope.hideMenu = false;
        // Execute action
    });
      // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        $scope.hideMenu = false;
        // Execute action
    });
    // ----------------------------------------

});