// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('aleChimp', ['ionic',
    'firebase',
    'LoginController',
    'TabController',
    'HomeController',
    'BeerController',
    'PatronController',
    'NotificationController',
    'SettingController',
    'UserController'
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
        }
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

    $stateProvider.state('tab.patrons', {
        url: '/patrons',
        views: {
          'tab-patrons': {
            templateUrl: 'views/patrons.html',
            controller: 'PatronController'
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
