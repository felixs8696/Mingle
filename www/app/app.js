angular.module('mingle', ['ionic',
                          'mingle.controllers',
                          'mingle.login',
                          'mingle.profile',
                          'mingle.ui-utils',
                          'mingle.utils'])
  .config(['$logProvider', function($logProvider) {
    $logProvider.debugEnabled(true); // default is true
  }])
  .run(function($ionicPlatform, $log, EnhanceLogger) {
    EnhanceLogger.setLog($log);
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
  });