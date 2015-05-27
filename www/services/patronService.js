angular.module('PatronService', [])

    .factory('PatronService', function($q) {
        var ref = new Firebase("https://ale-chimp.firebaseio.com");
            barBase = ref.child("/bars/0");
            patronRef = barBase.child("/patrons");
            patronData = {};

        patronData.getAllPatrons = function() {
            var patrons = {};
            var deferred = $q.defer();
            patronRef.on("value", function(snapshot) {
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        };

        patronData.createPatron = function(customer) {
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

        patronData.updatePatron = function(customer, patId) {
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

        return patronData;
    });

