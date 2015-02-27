angular.module('HomeController', [])

.controller('HomeController', ['$scope', '$firebase', '$ionicModal', 'BeerImageService', function($scope, $firebase, $ionicModal, BeerImageService) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var barBase = new Firebase("https://ale-chimp.firebaseio.com/bars/1");
    var beerBase = new Firebase("https://ale-chimp.firebaseio.com/bars/1/beers");
    var sync = $firebase(baseRef);

    $scope.customer = {
        "fname": "",
        "lname": "",
        "receiveEmail": false,
        "email": "",
        "receiveText": false,
        "phone": ""
    };

    $scope.drink = {
        "name": "",
        "brewery": "",
        "style": "",
        "comment": "",
        "breweryLocation": "",
        "image": ""
    };

    $scope.notify = {
        "beer": "",
        "comment": "",
        "time": "",
        "patrons": ""

    };

    beerBase.on("value", function(snapshot) {
          var data = snapshot.val();
          console.log(data);
          $scope.beers = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
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

    // ------------ forms functions for adding new items ----------------
    $scope.createPatron = function(customer) {
        console.log(customer);
        barBase.child('patrons').push(customer);
    };

    $scope.createBeer = function(drink) {
        console.log(drink.style);
        console.log(BeerImageService.getImage(drink.style));
        drink.image = BeerImageService.getImage(drink.style);
        console.log(drink);
        barBase.child('beers').push(drink);
    };

    $scope.createNotification = function(notify) {
        var d = new Date();
        var n = d.getTime();
        notify.time = n;
        console.log(notify);
        barBase.child('notifications').push(notify);

    };



}]);