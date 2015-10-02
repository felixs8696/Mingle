(function() {
  angular
    .module('mingle.firebase-root', ['firebase'])
    .constant('FirebaseRoot', new Firebase('https://mingler.firebaseio.com/'));
}());