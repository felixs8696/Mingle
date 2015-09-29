angular
  .module('mingle.profile')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = [];

function ProfileCtrl() {
  var vm = this;

  //Temporarily hard coded
  vm.user = "Felix Su";
  vm.user_firstname = vm.user.substring(0,vm.user.indexOf(' '));
  vm.pro_pic = '././img/felix_sq.jpg';
  vm.pro_background = '././img/stairs.jpg';
  vm.availability = {status: 'Free', color: 'yellowgreen'};

  vm.sectionList = {};
  vm.sectionList[0] = {section: 'university', icon: 'fa-book', description: 'UC Berkeley'};
  vm.sectionList[1] = {section: 'birthDate', icon: 'fa-gift', description: 'August 6, 1996'};
  vm.sectionList[2] = {section: 'hometown', icon: 'fa-home', description: 'Plainsboro, NJ'};
  vm.sectionList[3] = {section: 'phoneNumber', icon: 'fa-phone', description: '(732) 673-4738'};
  vm.sectionList[4] = {section: 'currentTown', icon: 'fa-location-arrow', description: 'Berkeley, CA'};
  vm.sectionList[5] = {section: 'email', icon: 'fa-envelope-square', description: 'felixs8696@berkeley.edu'};

  //Favorite Activities
  vm.itemList = {};
  vm.itemList[0] = {count: '20', title: 'Anything', icon: 'fa-star'};
  vm.itemList[1] = {count: '17', title: 'Study', icon: 'fa-bookmark'};
  vm.itemList[2] = {count: '16', title: 'Eat', icon: 'fa-spoon'};
  vm.itemList[3] = {count: '5', title: 'Soccer', icon: 'fa-soccer-ball-o'};
  vm.itemList[4] = {count: '2', title: 'Jam (music)', icon: 'fa-music'};

  //Most Visited places
  vm.visitedList = {};
  vm.visitedList[0] = {count: '37', title: "Galvanize SF"};
  vm.visitedList[1] = {count: '30', title: "People's Park Basketball Court"};
  vm.visitedList[2] = {count: '17', title: 'Moffit Library'};
  vm.visitedList[3] = {count: '7', title: 'Hoagie Haven'};
  vm.visitedList[4] = {count: '5', title: 'Berkeley SLC'};

  //Best Friends
  vm.usersList = {};
  vm.usersList[0] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpa1/v/t1.0-9/10153809_10204818079364565_1581038108894762391_n.jpg?oh=93d4c59ebaca244a0f4e89e141781d90&oe=5637B591', name: 'Lev G.'};
  vm.usersList[1] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xaf1/v/t1.0-9/11102707_10200462451160164_9116940758652765477_n.jpg?oh=99444c5b316534bca7afd30fb9b65ece&oe=565B599F', name: 'Bolong X.'};
  vm.usersList[2] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xft1/v/t1.0-9/10407854_10203133673476473_3107856110958817424_n.jpg?oh=5f942fef69ed479a76bda5d5aa9f50d4&oe=56389D03', name: 'Pratyush T.'};
  vm.usersList[3] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpa1/v/t1.0-9/11182285_830281170395421_4272681422725506179_n.jpg?oh=188430956a06e7269fb5f9772fda1894&oe=56572BCD', name: 'Vishan N.'};
  vm.usersList[4] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/10986983_10206349747523480_1411439631779745389_o.jpg', name: 'Rachel L.'};
  vm.usersList[5] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtf1/v/t1.0-9/11083681_872688532770293_3761073622404986860_n.jpg?oh=99ef5b791e142191c49739bda5545517&oe=563B64D7', name: 'Andy H.'};
  vm.usersList[6] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtf1/v/t1.0-9/11694822_1132540653429017_8129390479657026474_n.jpg?oh=018ad3c493b0a7f790813b52d1f873ca&oe=5650EC6E', name: 'Yen L.'};
  vm.usersList[7] = {picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpa1/t31.0-8/10956406_1011454442215459_1754943839517141496_o.jpg', name: 'Timothy H.'};
}