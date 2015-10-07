angular
  .module("mingle.list")
  .factory('ListModel', ListModel);

ListModel.$inject = ["FirebaseRoot"];

function ListModel(FirebaseRoot) {
  var factory = {
    getFriends: getFriends
  };

  function getFriends() {
    return [
      {
        name: "Lev Gedrich"
      },
      {
        name: "Bolong Xu"
      },
      {
        name: "Rachel Lee"
      }
    ]
  }

  return factory;
}