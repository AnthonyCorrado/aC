angular.module('HomeController', [])

.controller('HomeController', ['$scope', '$firebase', '$ionicModal', function($scope, $firebase, $ionicModal) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.on("value", function(snapshot) {
          console.log(snapshot.val().beers);
          $scope.beers = snapshot.val().beers;
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

    $scope.createNotification = function() {

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

    // baseRef.child('bars').set([
    //     {
    //         "bar_name": "Monkey's",
    //         "street": "1234 Hello World Ave",
    //         "city": "Santa Monica",
    //         "state": "California",
    //         "zip": "90401",
    //         "email": "support@monkeys.com",
    //         "phone": "6515555555",
    //         "password": "3249uaf09349348439402pilj4i"
    //     },
    //     {
    //         "bar_name": "Princess Pub & Grille",
    //         "street": "1665 India St",
    //         "city": "San Diego",
    //         "state": "California",
    //         "zip": "92101",
    //         "email": "support@princesspub.com",
    //         "phone": "6197023021",
    //         "password": "3249uaf09349348439402piljdf"
    //     }
    // ]);

}]);