const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String }
});
// data template and schema expectations
const schema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, minlength: 2, required: true },
  description: { type: String, maxlength: 380, required: true },
  when: { type: String, minlength: 2, required: true },
  where: { type: String, minlength: 2, required: true },
  type: { type: String, minlength: 2, required: true },
  address: { type: String, minlength: 2, required: true },
  comments: [ commentSchema]
});




// const schema = new mongoose.Schema({
//   name: { type: String, minlength: 2, required: true },
//   origin: { type: String, minlength: 2, required: true },
//   tastingNotes: { type: String, maxlength: 380, required: true },
//   image: { type: String },
//   comments: [ commentSchema ]
// });


// telling the model it should be called Song.
// name of the model 'song' + schema
module.exports = mongoose.model('Popup', schema);
