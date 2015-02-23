angular.module('HomeController', [])

.controller('HomeController', ['$scope', '$firebase', function($scope, $firebase) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    baseRef.on("value", function(snapshot) {
          console.log(snapshot.val().beers);
          $scope.beers = snapshot.val().beers;
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
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