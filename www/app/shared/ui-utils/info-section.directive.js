(function() {
  angular
    .module('mingle.ui-utils')
    .directive('infoSection', infoSection);

  infoSection.$inject = [];

  function infoSection() {
    return {
      restrict: 'AE',
      scope: {
        title: '@'
      },
      transclude: true,
      templateUrl: 'app/shared/ui-utils/info-section.html'
    }
  }
}());