angular.module('HelperService', [])

.factory('HelperService', function() {

    var helperObj = {};

    // used for notifications
    helperObj.getTime = function(data) {
        return _.forEach(data, function(notif) {
            console.log(notif);
            var time = notif.time;
            var timeStamp = moment(time);
            console.log(timeStamp._d);
            parsedTime = moment(timeStamp._d).format("ddd, MMM Do YYYY, LT");
            console.log(parsedTime);
            notif.parsedTime = parsedTime;

            console.log(notif);
        });
    };

    return helperObj;
});
