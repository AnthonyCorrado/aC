angular.module('PatronService', [])

    .factory('PatronService', function($q, configApi) {

        var url = configApi.api.firebase.domain,
            ref = new Firebase(url);
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
                    for (i = 0; i < customer.beers.length; i++) {
                        barBase.child('beers/' + customer.beers[i] + '/patrons/').push(patronId);
                    }
                }
            });
        };

        patronData.updatePatron = function(customer, patId) {
            console.log(customer);
            var id = barBase.child('patrons/' + "-JqZ0vmhZz60ECeuJXEj").set(customer);
            patronRef.child("/" + "-JqZ0vmhZz60ECeuJXEj").set(customer, function(err) {
                if (!err) {
                    for (i = 0; i < customer.beers.length; i++) {
                        barBase.child('beers/' + customer.beers[i] + '/patrons/').push(patronId);
                    }
                }
            });
        };

        patronData.getPatronById = function(id) {
            var patron = {};
            var deferred = $q.defer();
            patronRef.child('/' + id).once('value', function(snapshot) {
                deferred.resolve(snapshot.val());
            });
            return deferred.promise;
        };

        return patronData;
    });

