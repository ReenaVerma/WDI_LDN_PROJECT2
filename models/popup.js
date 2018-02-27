const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
// using an id to refer to a user
// looking for objectid data, then we say we want a USER object
});

commentSchema.methods.isOwnedBy = function(user) {
  // is this comment owned by this user?
  return this.user && user._id.equals(this.user._id);
  // if logged in user id, matches the object id
};

// data template and schema expectations
const schema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, minlength: 2, required: true },
  description: { type: String, maxlength: 380, required: true },
  when: { type: String, minlength: 2, required: true },
  where: { type: String, minlength: 2, required: true },
  type: { type: String, minlength: 2, required: true },
  lat: { type: Number },
  lng: { type: Number },
  loc: { type: String },
  comments: [ commentSchema ]
});




// telling the model it should be called Popup.
// name of the model 'popup' + schema
module.exports = mongoose.model('Popup', schema);
