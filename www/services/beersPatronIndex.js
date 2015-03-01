angular.module('BeersPatronIndexService', [])

    .factory('BeersPatronIndexService', function() {

        var beerObject = {};

        beerObject.setPatronToBeer = function(index, beers) {
            console.log(index);
            console.log(beers);
        };

        return beerObject;

    });