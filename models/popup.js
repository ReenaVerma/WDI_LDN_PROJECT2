const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String },
  rating: { type: Number },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
// using an id to refer to a user
// looking for objectid data, then we say we want a USER object
});


const gallerySchema = new mongoose.Schema({
  galleryImage: { type: String }
  // user: { type: mongoose.Schema.ObjectId, ref: 'User' }
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
  cost: { type: String },
  description: { type: String, maxlength: 500, required: true },
  date: { type: Date, minlength: 2, required: true },
  twoWords: { type: String, minlength: 2, required: true },
  type: { type: String, minlength: 2, required: true },
  lat: { type: Number },
  lng: { type: Number },
  loc: { type: String },
  comments: [ commentSchema ],
  galleryImage: [ gallerySchema ]
});




// schema
//   .virtual('avgRating')
//   .get(function getAvgRating() {
//     if(this.comments.length === 0) return 'N/A';
//     const ratings = this.comments.map(comment => comment.rating);
//     return Math.round(((ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length) * 2) / 2);
//   });


// telling the model it should be called Popup.
// name of the model 'popup' + schema
module.exports = mongoose.model('Popup', schema);
