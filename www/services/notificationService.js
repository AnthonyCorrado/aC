angular.module('NotificationService', [])

    .factory('NotificationService', function($q, HelperService, BeerService, configApi, EmailService) {

        var url = configApi.api.firebase.domain,
            ref = new Firebase(url),
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
            return BeerService.getBeerById(notify.beerId)
                .then(function(response) {
                    barBase.child('notifications').push(notify);
                    return _.forEach(response.patrons, function(key) {
                        notify.patrons.push(key);
                        // perhaps a promise here to notify user that patrons have been emailed
                        return EmailService.emailPatron(notify.beerId, notify.comment, key)
                            .then(function(res) {
                                // console.log(res);
                            });
                    });
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