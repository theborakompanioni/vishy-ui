(function(module) {
try {
  module = angular.module('tbk.vishy-ui');
} catch (e) {
  module = angular.module('tbk.vishy-ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/login.html',
    '<style>\n' +
    '  .form-login-container {\n' +
    '    max-width: 330px;\n' +
    '    padding: 15px;\n' +
    '    margin: 0 auto;\n' +
    '  }\n' +
    '\n' +
    '  .form-login-container .seperator {\n' +
    '    border-top: 1px solid #d8dee4;\n' +
    '    margin: 20px 0px;\n' +
    '    height: 0px;\n' +
    '    text-align: center;\n' +
    '  }\n' +
    '\n' +
    '  .form-login-container .seperator span {\n' +
    '    background-color: #f3f5f7;\n' +
    '    position: relative;\n' +
    '    top: -10px;\n' +
    '    padding: 0px 5px;\n' +
    '    text-transform: uppercase;\n' +
    '    font-weight: bold;\n' +
    '    color: #abb8c4;\n' +
    '  }\n' +
    '\n' +
    '  .form-login-container .seperator .or:before {\n' +
    '    content: "or";\n' +
    '  }\n' +
    '\n' +
    '  .form-login .form-control {\n' +
    '    position: relative;\n' +
    '    height: auto;\n' +
    '    -webkit-box-sizing: border-box;\n' +
    '    -moz-box-sizing: border-box;\n' +
    '    box-sizing: border-box;\n' +
    '    padding: 10px;\n' +
    '    font-size: 16px;\n' +
    '  }\n' +
    '\n' +
    '  .form-login .form-control:focus {\n' +
    '    z-index: 2;\n' +
    '  }\n' +
    '\n' +
    '  .form-login input[type="email"] {\n' +
    '    margin-bottom: -1px;\n' +
    '    border-bottom-right-radius: 0;\n' +
    '    border-bottom-left-radius: 0;\n' +
    '  }\n' +
    '\n' +
    '  .form-login input[type="password"] {\n' +
    '    margin-bottom: 10px;\n' +
    '    border-top-left-radius: 0;\n' +
    '    border-top-right-radius: 0;\n' +
    '  }\n' +
    '\n' +
    '  .form-login button[type="submit"] {\n' +
    '    margin-bottom: 10px;\n' +
    '  }\n' +
    '</style><div class="container"><div class="form-login-container well"><form action="http://localhost:8080/signin/twitter" method="POST"><button class="btn btn-lg btn-default btn-block" type="submit"><i class="fa fa-github"></i> Login with Github</button></form><div class="seperator"><span class="or"></span></div><form class="form-login"><label for="inputEmail" class="sr-only">Email address</label> <input type="email" id="inputEmail" class="form-control input-lg" placeholder="Email address" required="" autofocus=""> <label for="inputPassword" class="sr-only">Password</label> <input type="password" id="inputPassword" class="form-control input-lg" placeholder="Password" required=""><div class="checkbox"><label><input type="checkbox" value="remember-me"> Remember me</label></div><button class="btn btn-lg btn-primary btn-block" type="submit">Login</button><ul class="list-unstyled"><li><a href="/forgot-password">Forgot your password?</a></li><li>New around here? <a href="/signup">Create an account.</a></li></ul></form></div></div>');
}]);
})();
