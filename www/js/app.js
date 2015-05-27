angular.module('aleChimp', ['ionic',
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
    'DatabaseService',
    'HelperService'
])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/home');


    $stateProvider.state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "views/partials/tabs.html",
        controller: 'TabController'
    });

    $stateProvider.state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
          }
        },
    });

    $stateProvider.state('tab.beers', {
        url: '/beers',
        views: {
          'tab-beers': {
            templateUrl: 'views/beers.html',
            controller: 'BeerController'
          }
        }
    });
    $stateProvider.state('tab.beers-show', {
        url: '/beers/:beerId',
        views: {
          'tab-beers': {
            templateUrl: 'views/beer-show.html',
            controller: 'BeerDetailController'
          }
        }
    });

    $stateProvider.state('tab.patrons', {
        url: '/patrons',
        views: {
          'tab-patrons': {
            templateUrl: 'views/patrons.html',
            controller: 'PatronController'
          }
        }
    });
    $stateProvider.state('tab.patrons-show', {
        url: '/patrons/:patronId',
        views: {
          'tab-patrons': {
            templateUrl: 'views/patron-show.html',
            controller: 'PatronDetailController'
          }
        }
    });

    $stateProvider.state('tab.notifications', {
        url: '/notifications',
        views: {
          'tab-notifications': {
            templateUrl: 'views/notifications.html',
            controller: 'NotificationController'
          }
        }
    });
    $stateProvider.state('tab.notifications-show', {
        url: '/notifications/:notificationId',
        views: {
          'tab-notifications': {
            templateUrl: 'views/notification-show.html',
            controller: 'NotificationDetailController'
          }
        }
    });

    $stateProvider.state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'views/settings.html',
            controller: 'SettingController'
          }
        }
    });

});
