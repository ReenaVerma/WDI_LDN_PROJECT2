const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Popup = require('../models/popup');
const User = require('../models/user');
let popUpData = require('./data/popups');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/music-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    await mongoose.connection.dropDatabase();
    console.log('Database dropped');

    const user = await User.create({
      username: 'ReenaVerma',
      email: 'reena@reena.com',
      password: 'password',
      passwordConfirmation: 'password'
    });

    popUpData = popUpData.map(popup => ({
      ...popup,
      user: user._id   // 👈 important
    }));

    const popups = await Popup.create(popUpData);
    console.log(`${popups.length} popups created`);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
});
