angular.module('MandrillService', [])

    .factory('Mandrill', ['$http', 'configApi',
        function($http, configApi) {

            console.log(configApi);
            var KEYS = configApi.mandrill.apiKey;
            var email = configApi.email;
            /*=======================*/
            /*  Insert Emails Here
            /*=======================*/

            var fromEmail = email.from;
            var fromName = email.sender;
            var toEmail = email.to;
            var toName = email.recipient;
            var replyTo = 'email';
     
            return {
                emailNotif: function(beerObj, message, patronObj) {
                    return $http.post("https://mandrillapp.com/api/1.0//messages/send.json", {
                        "key": KEYS,
                        "message": {
                            "text": message,
                            "subject": beerObj.name + " is back!",
                            "from_email": fromEmail,
                            "from_name": fromName,
                            "to": [
                                {
                                    "email": patronObj.email,
                                    "name": patronObj.fname,
                                    "type": "to"
                                }
                            ],
                            "headers": {
                                "Reply-To": replyTo
                            }

                        }
                    })
                    .success(function(data, status, headers, config){
                    });
                }
            };
    }]);