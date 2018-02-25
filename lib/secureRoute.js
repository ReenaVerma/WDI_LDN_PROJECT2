// THIS IS MIDDLEWARE FUNCTION, THAT SITS IN FRONT OF THE CONTROLLER ACTIONS IN THE ROUTER
// CHECKS WHETHER A PAGE REQUEST IS PAGE MADE BY AN AUTHORISED USER OR NOT
// THIS FUNCTION ALLOWS US TO DISPLAY CERTAIN PAGES WHEN LOGGED IN

function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => res.redirect('/login'));
    // If the user is not logged in, clear the session cookie and redirect them to the login page
  }
  next();
}

module.exports = secureRoute;
