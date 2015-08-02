(function() {
  angular
    .module('mingle.ui-utils')
    .directive('countList',countList);

  countList.$inject = [];

  function countList() {
    return {
      restrict: 'AE',
      scope: {
        itemList: '='
      },
      templateUrl: 'app/shared/ui-utils/count-list.html'
    }
  }
}());