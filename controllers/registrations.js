// PULL THROUGH LIFE CYCLE HOOKS FROM MODELS/USER
const User = require('../models/user');

// RENDER THE REGISTRATION PAGE/FORM
function newRoute(req, res) {
  res.render('registrations/new');
}

// SEND USER TO POPUP PAGE ONCE REGISTERED
function createRoute(req, res, next) {
  console.log(req.body);
  User.create(req.body)
    .then((user) => {
      console.log(user);
      res.redirect('/login');
    })
    .catch(next);
}


module.exports = {
  new: newRoute,
  create: createRoute
};
