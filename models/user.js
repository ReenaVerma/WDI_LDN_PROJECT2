const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// need this to ensure data is stored also.
// if data fields do not have a model schema, the data/field would just be ignored
const schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// schema.virtual('fullname')
//   .get(function()
//   return `${this.firstname} ${this.lastname}`;
// });

// FIRST
// Setup password confirmation vitual, so password confirmation is not stored in the database.
// Password confirmation is stored in mongoose virtual
// Password confirmation can still be accessed in pre-validation hook
schema
  .virtual('passwordConfirmation')
  // we need passwordconfirmation access in our code below, so we can run the rest of our validation codes.
  // so even though we're not storing it, we still need to reference it in our pre-validation function, for the function to work
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;  //'this' refers to the user object
    // _is convention in dev, so developers know it's a temporary variable/code
  });


// SECOND
// PRE/BEFORE-VALIDATION HOOK, WHICH ENSURES PASSWORD AND PASSWORD CONFIRMATION MATCHES
schema.pre('validate', function checkPassword(next) {
  // check if password has been modified and whether confirmation, matches with password
  if(this.isModified('password') && this._passwordConfirmation !== this.password)
    // if not, then invalidate
    this.invalidate('passwordConfirmation', 'does not match');
  next(); //if all is good, move onto the next step, (validation/hashing the password)
});


// THIRD
// PRE-SAVE HOOK - VALIDATION / HASHING THE PASSWORD
schema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    // if the password has been modified, hash it and store on the user object
  }
  next(); //app hangs if you dont use next
});


// FOUR
// PASS IN THE PLAIN TEXT PASSWORD
// methods is like prototypes for mongoose
schema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
  // if you hash the password entered, does it match the hashed password in the database
};


module.exports = mongoose.model('User', schema);
