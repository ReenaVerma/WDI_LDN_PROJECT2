const User = require('../models/user');


function userAuth(req, res, next) {
  if(!req.session.userId) return next();
  // If there is no user ID, then there is nothing to do. Move onto the next routes.

  User
    .findById(req.session.userId)  // Otherwise, find the userID, in the user database
    .then(user => {

      if(!user) req.session.regenerate(() => res.redirect('/login'));
      // If user hasn't been found, (perhaps account was deleted),
      // match the userID with the user ID in the cookie
      // regenerate wipes data frpm the cookie
      // every request comes through the userAuth file

      // If they user is logged in, they then become authenticated
      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      // Add some helpers to res.locals to be used in the views

      req.currentUser = user;
      // store the user data on `req` to be used inside the controllers
      next();
    });
}

module.exports = userAuth;
