angular
  .module('mingle.login')
  .controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ["AuthService", "$state"];

function LoginCtrl(AuthService, $state) {
  var vm = this;
  vm.userLogin = userLogin;

  function userLogin(input) {
    AuthService.authenticateUser(input);
    $state.go("app.profile");
  }
}