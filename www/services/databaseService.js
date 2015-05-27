angular.module('DatabaseService', [])

    .factory('DatabaseService', function(BeerImageService, $q, HelperService) {
        var ref = new Firebase("https://ale-chimp.firebaseio.com");
        var barBase = ref.child("/bars/0");

        var patronRef = barBase.child("/patrons");
        var beerRef = barBase.child("beers");
        var notifRef = barBase.child("/notifications");
        var dataObject = {};

        dataObject.getAllNotifs = function() {
            var notifications = {};
            var deferred = $q.defer();
            notifRef.on("value", function(snapshot) {
                deferred.resolve(HelperService.getTimes(snapshot.val()));
            });
            return deferred.promise;
        };

        dataObject.createNotification = function(notify) {
            var d = new Date();
            var n = d.getTime();
            notify.time = n;
            this.getBeerById(notify.beerId)
                .then(function(response) {
                    _.forEach(response.patrons, function(key) {
                        notify.patrons.push(key);
                    });
                    barBase.child('notifications').push(notify);
                });
        };

        dataObject.getNotificationById = function(id) {
            var notification = {};
            var deferred = $q.defer();
            notifRef.child('/' + id).once('value', function(snapshot) {
                deferred.resolve(HelperService.getTime(snapshot.val()));
            });
            return deferred.promise;
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