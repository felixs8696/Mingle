angular
  .module('mingle')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl as vm',
        data: {
          userRestricted: true
        }
      })
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'app/auth/login.html',
            controller: 'LoginCtrl as vm'
          }
        },
        data: {
          userRestricted: false
        }
      })
      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'app/profile/profile.html',
            controller: 'ProfileCtrl as vm'
          }
        },
        data: {
          userRestricted: true
        }
      });
    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/app/profile');
  });
