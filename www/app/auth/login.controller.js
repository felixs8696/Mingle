angular
  .module('mingle.login')
  .controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ["AuthService"];

function LoginCtrl(AuthService) {
  var vm = this;
  vm.authenticateUser = AuthService.authenticateUser;
}