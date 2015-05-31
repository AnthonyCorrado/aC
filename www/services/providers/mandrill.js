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
                errorMsg: function(resp) {
                return $http.post('https://mandrillapp.com/api/1.0//messages/send.json', {
                    'key': KEYS,
                    'message': {
                        'html': '<p>This was a test</p><p>' + resp + '</p><p>Success Code:' + resp.code + '</p>',
                        'text': resp,
                        'subject': 'Great Job',
                        'from_email': fromEmail,
                        'from_name': fromName,
                        'to': [
                            {
                                'email': toEmail,
                                'name': toName,
                                'type': 'to'
                            }
                        ],
                        'headers': {
                            'Reply-To': replyTo
                        }
                    }
                })
                .success(function(data, status, headers, config){
                    // log success
                });
            }
        };
    }]);