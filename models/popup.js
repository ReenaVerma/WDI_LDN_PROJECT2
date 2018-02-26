const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String }
});


// const locationSchema = new mongoose.Schema({
//   name: String,
//   loc: {
//     type: [Number],  // [<longitude>, <latitude>]
//     index: '2d'      // create the geospatial index
//   }
// });
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
