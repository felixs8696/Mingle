(function() {
  angular
    .module('mingle.ui-utils')
    .directive('userGrid', userGrid);

  userGrid.$inject = [];

  function userGrid() {
    return {
      restrict: 'AE',
      scope: {
        usersList: '='
      },
      templateUrl: "app/shared/ui-utils/user-grid.html"
    }
  }
}());