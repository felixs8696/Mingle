angular
  .module('mingle.auth')
  .controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ["AuthService", "$state"];

function LoginCtrl(AuthService, $state) {
  var vm = this;
  vm.userLogin = userLogin;

  function userLogin(input) {
    AuthService.authenticateUser(input)
      .then(function() {
        $state.go("app.profile");
      });
  }
}