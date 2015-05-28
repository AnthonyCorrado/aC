angular.module('HomeController', [])

.controller('HomeController', ['$rootScope', '$scope', '$firebase', '$ionicModal', 'BeerImageService', 'BeerService', 'PatronService', 'NotificationService', function($rootScope, $scope, $firebase, $ionicModal, BeerImageService, BeerService, PatronService, NotificationService) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var barBase = new Firebase("https://ale-chimp.firebaseio.com/bars/0");
    var beerBase = new Firebase("https://ale-chimp.firebaseio.com/bars/0/beers");
    var sync = $firebase(baseRef);

    $scope.customer = {
        "fname": "",
        "lname": "",
        "receiveEmail": false,
        "email": "",
        "receiveText": false,
        "phone": "",
        "beers": [],
        "heading": "Add Patron"
    };

    $scope.drink = {
        "name": "",
        "brewery": "",
        "style": "",
        "comment": "",
        "breweryLocation": "",
        "image": "",
        "patrons": [],
        "heading": "Add Beer"
    };

    $scope.notify = {
        "beerId": "",
        "comment": "",
        "time": "",
        "patrons": []
    };

    beerBase.on("value", function(snapshot) {
          var data = snapshot.val();
          $scope.beers = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });


    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            console.log('state changed');
            if($scope.modal) {
                $scope.closeModal();
            }
        });

    $scope.addPatron = function() {

        $scope.hideMenu = true;
        $ionicModal.fromTemplateUrl('views/partials/patrons-form.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.addBeer = function() {

        $scope.hideMenu = true;
        $ionicModal.fromTemplateUrl('views/partials/beers-form.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.addNotification = function() {

        $scope.hideMenu = true;
        $ionicModal.fromTemplateUrl('views/partials/notifications-form.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    // ------------ forms functions for adding new items ----------------
    $scope.createPatron = function(customer) {
        customer.beers = [customer.beers.beer1 || null, customer.beers.beer2 || null, customer.beers.beer3 || null];
        PatronService.createPatron(customer);
        $scope.closeModal();
    };

    $scope.createBeer = function(drink) {
        BeerService.createBeer(drink);
        $scope.closeModal();
    };

    $scope.createNotification = function(notify) {
        NotificationService.createNotification(notify);
        $scope.closeModal();
    };

    // ionic modal functions -------------------------
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
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
    // -------------------------------------------
}]);