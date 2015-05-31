angular.module('BeerService', [])

    .factory('BeerService', function($q, BeerImageService, configApi) {
        var url = configApi.api.firebase.domain,
            ref = new Firebase(url),
            barBase = ref.child("/bars/0"),
            beerRef = barBase.child("/beers"),
            beersData = {};

        beersData.getAllBeers = function() {
            var beers = {};
            var deferred = $q.defer();
            beerRef.on("value", function(snapshot) {
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        };

        beersData.createBeer = function(beer) {
            beer.image = BeerImageService.getImage(beer.style);
            console.log(beer);
            barBase.child('beers').push(beer);
        };

        beersData.updateBeer = function(beer, id) {
            beer.image = BeerImageService.getImage(beer.style);
            barBase.child('beers/' + id).set(beer);
        };
        // still need to change over some old sevice calls from databaseService
        beersData.getBeerById = function(id) {
            var beer = {};
            var deferred = $q.defer();
            beerRef.child('/' + id).once('value', function(snapshot) {
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        };

        return beersData;
    });