angular
  .module("mingle.list")
  .controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ["ListModel"];

function ListCtrl(ListModel) {
  var vm = this;
  vm.friends = ListModel.getFriends();

}