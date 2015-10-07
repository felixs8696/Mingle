angular.module('mingle', ['ionic',
                          'mingle.controllers',
                          'mingle.auth',
                          'mingle.list',
                          'mingle.profile',
                          'mingle.ui-utils',
                          'mingle.utils'])
  .config(['$logProvider', function($logProvider) {
    $logProvider.debugEnabled(true); // default is true
  }])
  .run(function($ionicPlatform, $log, EnhanceLogger, AuthService, UserStorage, $state, $rootScope) {
    //Enhance the angular logger using the debug-log service
    EnhanceLogger.setLog($log);

    //Ionic built in defaults
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    //Gets the user's data if he/she is currently logged into Firebase
    //If the user is logged in, stores his/her data in local storage
    var userAuthData = AuthService.userIsAuthenticated();
    if (userAuthData) {
      AuthService.saveUserDataInLocalStorage(userAuthData);
    }

    //If userData is not in local storage go to login page. Otherwise go to profile.
    if (!UserStorage.getUser()) {
      $state.go('app.login');
    } else {
      $state.go('app.profile');
    }

    //Redirect to login if not logged in
    $rootScope.$on('$stateChangeStart', function(event, toState){
      var userAuthData = UserStorage.getUser();
      var userRestricted = toState.data.userRestricted;

      if (userRestricted && !userAuthData) {
        event.preventDefault();
        $log.context('toLogin').log('user auth needed to view page - return to login');
        $state.go('app.login');
      }
      if (toState.url === "/login" && userAuthData) {
        event.preventDefault();
        $log.context('toProfile').log('restricted access to login page - user is already authenticated');
        $state.go("app.profile");
      }
    });

  });