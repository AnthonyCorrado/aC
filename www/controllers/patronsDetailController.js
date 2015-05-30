angular.module('PatronDetailController', [])

.controller('PatronDetailController', function($rootScope, $scope, $stateParams, $ionicModal, PatronService, BeerService) {

    var baseRef = new Firebase("https://ale-chimp.firebaseio.com/bars/0/patrons/" + $stateParams.patronId);
    var beerRef = new Firebase("https://ale-chimp.firebaseio.com/bars/0/beers");

    var getSubBeersNames = function(subs, customer) {
        var subBeers = [];
        var obj = _.forEach(subs, function(id) {
            BeerService.getBeerById(id)
                .then(function(response) {
                    subBeers.push(response);
                    console.log(subBeers[0]);
                    $scope.subBeers = subBeers;
                    customer.beers.beer1 = subBeers[0];
                    customer.beers.beer2 = subBeers[1];
                    customer.beers.beer3 = subBeers[2];
                    $scope.patronBeers = customer;
                });
        });
    };

    baseRef.once('value', function(snapshot) {
        console.log(snapshot.val());
        beerArray = [];
        $scope.thisPatron = snapshot.val();
        $scope.customer = snapshot.val();
        $scope.customer.exists = true;
        $scope.customer.heading = "Update Patron";
        var subscribers = _.valuesIn($scope.thisPatron.beers);
        getSubBeersNames(subscribers, $scope.customer);
        console.log(subscribers);
    });

    $scope.editPatron = function() {
        $ionicModal.fromTemplateUrl('views/partials/patrons-form.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.updatePatron = function(customer) {
        console.log(customer);
        customer.beers = [customer.beers.beer1 || null, customer.beers.beer2 || null, customer.beers.beer3 || null];
        PatronService.updatePatron(customer, $stateParams.patronId);
        $scope.closeModal();
    };

    // get all beers --------
    beerRef.on("value", function(snapshot) {
          var data = snapshot.val();
          console.log(data);
          $scope.beers = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });

    // ionic modal functions -------------------
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            console.log('state changed');
            if ($scope.modal) {
                $scope.closeModal();
            }
        });

    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        if ($scope.modal) {
            $scope.modal.remove();
        }
        $scope.hideMenu = false;
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