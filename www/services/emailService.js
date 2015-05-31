angular.module('EmailService', [])

    .factory('EmailService', function(PatronService, Mandrill, BeerService) {
        var emailData = {};

        emailData.emailPatron = function(beerId, message, patronId) {
            BeerService.getBeerById(beerId)
                .then(function(beerObj) {
                    console.log(beerObj);
                    PatronService.getPatronById(patronId)
                        .then(function(patronObj) {
                            console.log(patronObj);
                            Mandrill.emailNotif(beerObj, message, patronObj)
                                .then(function(data) {
                                    console.log(data);
                                });
                        });
                });
        };

        return emailData;

    });