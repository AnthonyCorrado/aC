angular.module('BeerController', [])

.controller('BeerController', ['$scope', '$timeout', '$firebase', 'BeerService', function($scope, $timeout, $firebase, BeerService) {

    BeerService.getAllBeers()
        .then(function(data) {
            console.log(data);
            $scope.beers = data;
        });

}]);