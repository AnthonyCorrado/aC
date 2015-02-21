angular.module("LoginController", [])

.controller("loginController", ["$scope", "$rootScope", "$firebase", "$timeout", '$state', function($scope, $rootScope, $firebase, $timeout, $state) {

    var ref = new Firebase("https://ale-chimp.firebaseio.com/");

    // ref.createUser({
    //     email: "anthonymcorrado@gmail.com",
    //     password: "1212121212"
    // }, function(error, userData) {
    //     if (error) {
    //         console.log("Error creating user: ", error);
    //     }
    //     else {
    //         console.log("Successfully created user account with uid: ", userData.uid);
    //     }
    // });

//     ref.authWithPassword({
//   email    : "anthonymcorrado@gmail.com",
//   password : "7xFf9UG22ePqcWFk"
// }, function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });

}]);