angular
  .module('mingle.auth')
  .factory('AuthService', AuthService);

AuthService.$inject = ["FirebaseRoot", "$log", "UserStorage", "$state", "$firebaseAuth"];

function AuthService(FirebaseRoot, $log, UserStorage, $state, $firebaseAuth){
  var factory = {
    authenticateUser: authenticateUser,
    createUser: createUser,
    getUserAuthStatus: getUserAuthStatus,
    setUserIdEmail: setUserIdEmail,
    saveUserDataInLocalStorage: saveUserDataInLocalStorage,
    userIsAuthenticated: userIsAuthenticated,
    unauthenticateUser: unauthenticateUser
  };

  var firebaseAuth = $firebaseAuth(FirebaseRoot);

  function createUser(credentials) {
    FirebaseRoot.createUser({
      email    : credentials.email,
      password : credentials.password
    }, function(error, userData) {
      if (error) {
        $log.context("LoginModel.createUser()").error("Error creating user:", error);
      } else {
        $log.context("LoginModel.createUser()").debug("Successfully created user account with uid:", userData.uid);
      }
    });
  }

  function authenticateUser(credentials) {
    return firebaseAuth.$authWithPassword({
      email    : credentials.email,
      password : credentials.password
    }).then(function(authData) {
      $log.context("LoginModel.authenticateUser()").debug("Authenticated successfully with payload:", authData);
      var userAuthData = setUserIdEmail(authData);
      saveUserDataInLocalStorage(userAuthData);
    }).catch(function(error) {
      $log.context("LoginModel.authenticateUser()").error("Login Failed!", error);
    });
  }

  function getUserAuthStatus(){
    var status = FirebaseRoot.getAuth();
    $log.context('AuthService.getCurrentAuthUser').debug("Auth status: ", status);
    return status;
  }

  function setUserIdEmail(authData) {
    if (authData) {
      return {
        id: authData.uid,
        email: authData.password.email
      };
    }
    return null;
  }

  function saveUserDataInLocalStorage(authData) {
    if (authData) {
      var userId = authData.id;
      var userRef = FirebaseRoot.child('users').child(userId);
      UserStorage.storeUserAuthData(authData);
      UserStorage.storeUserInfo(userRef);
    }
  }

  function userIsAuthenticated() {
    var userStatus = getUserAuthStatus();
    var userData = setUserIdEmail(userStatus);
    if (!userData) {
      UserStorage.removeUserDatafromLocalStorage();
    }
    return userData;
  }

  function unauthenticateUser() {
    UserStorage.removeUserDatafromLocalStorage();
    FirebaseRoot.unauth();
    $log.context('AuthService.unauthenticateUser()').log("User logged out");
    $state.go("app.login");
  }

  return factory;
}