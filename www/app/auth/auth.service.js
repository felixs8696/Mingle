angular
  .module('mingle.login')
  .factory('AuthService', AuthService);

AuthService.$inject = ["FirebaseRoot", "$log"];

function AuthService(FirebaseRoot, $log){
  var factory = {
    authenticateUser: authenticateUser,
    createUser: createUser
  };

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
    FirebaseRoot.authWithPassword({
      email    : credentials.email,
      password : credentials.password
    }, function(error, authData) {
      if (error) {
        $log.context("LoginModel.authenticateUser()").error("Login Failed!", error);
      } else {
        $log.context("LoginModel.authenticateUser()").debug("Authenticated successfully with payload:", authData);
      }
    });
  }

  return factory;
}