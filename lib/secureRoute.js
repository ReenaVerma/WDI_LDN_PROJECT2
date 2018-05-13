// THIS IS MIDDLEWARE FUNCTION, THAT SITS IN FRONT OF THE CONTROLLER ACTIONS IN THE ROUTER
// CHECKS WHETHER A PAGE REQUEST IS PAGE MADE BY AN AUTHORISED USER OR NOT
// THIS FUNCTION ALLOWS US TO DISPLAY CERTAIN PAGES WHEN LOGGED IN

function secureRoute(req, res, next) {
  // regenerate the session/clears the session cookie, if they are not logged in
  if(!req.session.userId) {
    return req.session.regenerate(() => {

      // if a user is redirected to a login in page, return this message
      // danger can be anyname.  It relates to teh type of messages
      // but calling it danger, means we can drop it in class and matches it to bulma class
      req.flash('danger', 'You must be logged in to do that');
      res.redirect('/login');

    });
  }
  next();
}

module.exports = secureRoute;
