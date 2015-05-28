angular.module('NotificationService', [])

    .factory('NotificationService', function($q, HelperService, BeerService) {
        var ref = new Firebase("https://ale-chimp.firebaseio.com"),
            barBase = ref.child("/bars/0"),
            notifRef = barBase.child("/notifications");
            notificationData = {};

        notificationData.getAllNotifs = function() {
            var notifications = {};
            var deferred = $q.defer();
            notifRef.on("value", function(snapshot) {
                deferred.resolve(HelperService.getTimes(snapshot.val()));
            });
            return deferred.promise;
        };

        notificationData.createNotification = function(notify) {
            var d = new Date();
            var n = d.getTime();
            notify.time = n;
            BeerService.getBeerById(notify.beerId)
                .then(function(response) {
                    _.forEach(response.patrons, function(key) {
                        notify.patrons.push(key);
                    });
                    barBase.child('notifications').push(notify);
                });
        };

        notificationData.getNotificationById = function(id) {
            var notification = {};
            var deferred = $q.defer();
            notifRef.child('/' + id).once('value', function(snapshot) {
                deferred.resolve(HelperService.getTime(snapshot.val()));
            });
            return deferred.promise;
        };

        return  notificationData;
    });