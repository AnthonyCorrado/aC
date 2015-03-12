angular.module('HelperService', [])

.factory('HelperService', function() {

    var helperObj = {};

    // used for notifications
    helperObj.getTimes = function(data) {
        return _.forEach(data, function(notif) {
            var time = notif.time;
            var timeStamp = moment(time);
            parsedTime = moment(timeStamp._d).format("ddd, MMM Do YYYY, LT");
            notif.parsedTime = parsedTime;
        });
    };

    helperObj.getTime = function(data) {
        console.log(data);
        var time = data.time;
        var timeStamp = moment(time);
        parsedTime = moment(timeStamp._d).format("ddd, MMM Do YYYY, LT");
        data.parsedTime = parsedTime;
        return data;

        // return _.forEach(data, function(notif) {
        //     var time = notif.time;
        //     var timeStamp = moment(time);
        //     parsedTime = moment(timeStamp._d).format("ddd, MMM Do YYYY, LT");
        //     notif.parsedTime = parsedTime;
        // });
    };

    return helperObj;
});
