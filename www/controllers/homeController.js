angular.module('HomeController', [])

.controller('HomeController', ['$rootScope', '$scope', '$firebase', '$ionicModal', 'BeerImageService', 'BeerService', 'PatronService', 'NotificationService', 'configApi', function($rootScope, $scope, $firebase, $ionicModal, BeerImageService, BeerService, PatronService, NotificationService, configApi) {

    var url = configApi.firebase.domain,
        baseRef = new Firebase(url),
        barBase = baseRef.child("/bars/0"),
        beerBase = barBase.child("/beers");

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