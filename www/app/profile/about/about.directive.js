(function() {
  angular
    .module('mingle.profile')
    .directive('aboutSection', aboutSection);

  aboutSection.$inject = [];

  function aboutSection() {
    return {
      restrict: 'AE',
      scope: {
        sectionList: '='
      },
      templateUrl: 'app/profile/about/about.html'
    }
  }
}());