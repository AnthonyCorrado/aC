angular.module('BeerController', [])

.controller('BeerController', ['$scope', '$timeout', '$firebase', 'BeerService', function($scope, $timeout, $firebase, BeerService) {
    var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
    var sync = $firebase(baseRef);

    BeerService.getAllBeers()
        .then(function(data) {
            console.log(data);
            $scope.beers = data;
        });

    // $timeout(function() {
    //     $scope.floatedLeft = "floated-left";
    // }, 100);

}]);