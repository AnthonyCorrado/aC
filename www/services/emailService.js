angular.module('EmailService', [])

    .factory('EmailService', function(PatronService, Mandrill, BeerService) {
        var emailData = {};

        emailData.emailPatron = function(beerId, message, patronId) {
                return BeerService.getBeerById(beerId)
                    .then(function(beerObj) {
                        return PatronService.getPatronById(patronId)
                            .then(function(patronObj) {
                                return Mandrill.emailNotif(beerObj, message, patronObj)
                                    .then(function(data) {
                                        console.log(data);
                                        return data;
                                    }, function(error) {
                                        console.log('there was an error');
                                    });
                            });
                    });
        };

        return emailData;

    });