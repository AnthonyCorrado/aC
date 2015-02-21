angular.module('BeerController', [])

.controller('BeerController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.beers = [
        {
            "name": "Sam Adams",
            "style": "Lager"
        },
        {
            "name": "90 Minute IPA",
            "style": "IPA"
        },
        {
            "name": "Young's Double Chocolate Stout",
            "style": "Stout"
        },
        {
            "name": "Sculpin IPA",
            "style": "IPA"
        },
        {
            "name": "Sam Adams",
            "style": "Lager"
        },
        {
            "name": "90 Minute IPA",
            "style": "IPA"
        },
        {
            "name": "Young's Double Chocolate Stout",
            "style": "Stout"
        },
        {
            "name": "Sculpin IPA",
            "style": "IPA"
        },

    ];

    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);

}]);