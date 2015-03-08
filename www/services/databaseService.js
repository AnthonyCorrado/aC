angular.module('DatabaseService', [])

    .factory('DatabaseService', function(BeerImageService, $q) {
        var baseRef = new Firebase("https://ale-chimp.firebaseio.com");
        var barBase = baseRef.child("/bars/1");
        var patronRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/patrons");
        var beerRef = new Firebase("https://ale-chimp.firebaseio.com/bars/1/beers");
        var dataObject = {};

        dataObject.createPatron = function(customer) {
            console.log(customer);
            var id = barBase.child('patrons').push(customer);
            id.set(customer, function(err) {
                if (!err) {
                    var patronId = id.key();
                    console.log(patronId);
                    if (customer.beers[0]) {
                        console.log(customer.beers[0]);
                        barBase.child('beers/' + customer.beers[0] + '/patrons/').push(patronId);
                    }
                    if (customer.beers[1]) {
                        barBase.child('beers/' + customer.beers[1] + '/patrons/').push(patronId);
                    }
                    if (customer.beers[2]) {
                        barBase.child('beers/' + customer.beers[2] + '/patrons/').push(patronId);
                    }
                }
            });
        };

        dataObject.updatePatron = function(customer, patId) {
            var id = barBase.child('patrons/' + patId).set(customer);
            patronRef.child("/" + patId).set(customer, function(err) {
                if (!err) {
                    if (customer.beers[0]) {
                        console.log(customer.beers[0]);
                        barBase.child('beers/' + customer.beers[0] + '/patrons/').push(patId);
                    }
                    if (customer.beers[1]) {
                        barBase.child('beers/' + customer.beers[1] + '/patrons/').push(patId);
                    }
                    if (customer.beers[2]) {
                        barBase.child('beers/' + customer.beers[2] + '/patrons/').push(patId);
                    }
                }
            });
        };

        dataObject.createBeer = function(drink) {
            drink.image = BeerImageService.getImage(drink.style);
            console.log(drink);
            barBase.child('beers').push(drink);
        };

        dataObject.updateBeer = function(drink, id) {
            drink.image = BeerImageService.getImage(drink.style);
            console.log(drink);
            barBase.child('beers/' + id).set(drink);
        };

        dataObject.createNotification = function(notify) {
            var d = new Date();
            var n = d.getTime();
            notify.time = n;
            console.log(notify);
            barBase.child('notifications').push(notify);
        };

        dataObject.getPatronById = function(id) {
            var patron = {};
            var deferred = $q.defer();
            patronRef.child('/' + id).once('value', function(snapshot) {
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        };

        dataObject.getBeerById = function(id) {
            var beer = {};
            var deferred = $q.defer();
            beerRef.child('/' + id).once('value', function(snapshot) {
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        };

        return dataObject;

    });