const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('../../environments');

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database connection successful.');
  } catch(e) {
    console.log('Database connection failed.');
    console.error(e);
  }
}

module.exports = connectDB;
