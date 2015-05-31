var aleChimp = angular.module('aleChimp', ['ionic',
    'firebase',
    'LoginController',
    'TabController',
    'HomeController',
    'BeerController',
    'BeerDetailController',
    'PatronController',
    'PatronDetailController',
    'NotificationController',
    'NotificationDetailController',
    'SettingController',
    'UserController',
    'BeerImageService',
    'BeerService',
    'PatronService',
    'NotificationService',
    'HelperService',
    'checklist-model',
    'MandrillService',
    'EmailService'
])

.run(function($ionicPlatform, $rootScope, $location, $ionicHistory, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }

    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        // overrides Ionic's state history within a tab and starts at the parent on state change
        if (toState.url === "/beers/:beerId" && fromState.url !== "/beers") {
            event.preventDefault();
            $state.go('tab.beers');
        } else if (toState.url === "/patrons/:patronId" && fromState.url !== "/patrons") {
            event.preventDefault();
            $state.go('tab.patrons');
        } else if (toState.url === "/notifications/:notificationId" && fromState.url !== "/notifications") {
            event.preventDefault();
            $state.go('tab.notifications');
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/home');

    $stateProvider
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "views/partials/tabs.html",
            controller: 'TabController'
        })

        .state('tab.home', {
            url: '/home',
            views: {
              'tab-home': {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
              }
            },
        })

        .state('tab.beers', {
            url: '/beers',
            views: {
              'tab-beers': {
                templateUrl: 'views/beers.html',
                controller: 'BeerController'
              }
            }
        })

        .state('tab.beers-show', {
            url: '/beers/:beerId',
            views: {
              'tab-beers': {
                templateUrl: 'views/beer-show.html',
                controller: 'BeerDetailController'
              }
            }
        })

        .state('tab.patrons', {
            url: '/patrons',
            views: {
              'tab-patrons': {
                templateUrl: 'views/patrons.html',
                controller: 'PatronController'
              }
            }
        })

        .state('tab.patrons-show', {
            url: '/patrons/:patronId',
            views: {
              'tab-patrons': {
                templateUrl: 'views/patron-show.html',
                controller: 'PatronDetailController'
              }
            }
        })

        .state('tab.notifications', {
            url: '/notifications',
            views: {
              'tab-notifications': {
                templateUrl: 'views/notifications.html',
                controller: 'NotificationController'
              }
            }
        })

        .state('tab.notifications-show', {
            url: '/notifications/:notificationId',
            views: {
              'tab-notifications': {
                templateUrl: 'views/notification-show.html',
                controller: 'NotificationDetailController'
              }
            }
        })

        .state('tab.settings', {
            url: '/settings',
            views: {
              'tab-settings': {
                templateUrl: 'views/settings.html',
                controller: 'SettingController'
              }
            }
        });

});

// bootstrap Angular to allow json data to be stored before initializing controllers/services
(function() {

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['aleChimp']);
        });
    }

    // fetch API data first, then bootstrap the Angular app
    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("config/api.json").then(function(response) {
            aleChimp.constant("configApi", response.data);
        }, function(errorResponse) {
            console.log('request to get api object failed. ' + errorResponse);
        });
    }
}());
