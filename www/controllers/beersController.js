angular.module('BeerController', [])

.controller('BeerController', ['$scope', function($scope) {

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

}]);