angular.module('BeerController', [])

.controller('BeerController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.beers = [
        {
            "name": "Sam Adams",
            "style": "Lager",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png"
        },
        {
            "name": "90 Minute IPA",
            "style": "IPA",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png"
        },
        {
            "name": "Young's Double Chocolate Stout",
            "style": "Stout",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/y6ToYBPBAI0FNpd/porter.png"
        },
        {
            "name": "Sculpin IPA",
            "style": "IPA",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png"
        },
        {
            "name": "Sam Adams",
            "style": "Lager",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png"
        },
        {
            "name": "90 Minute IPA",
            "style": "IPA",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/scaBy4snIEefdvc/brown.png"
        },
        {
            "name": "Young's Double Chocolate Stout",
            "style": "Stout",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/y6ToYBPBAI0FNpd/porter.png"
        },
        {
            "name": "Sculpin IPA",
            "style": "IPA",
            "image": "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png"
        },

    ];

    $timeout(function() {
        $scope.floatedLeft = "floated-left";
    }, 100);

}]);