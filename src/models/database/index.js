const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('../../environments');
const { insertManyQuestions, findAllQuestions } = require("../../services/question");
const { insertManyTopics, findAllTopics } = require("../../services/topic");

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database connection successful.');

    // seed questions data
    const questions = await findAllQuestions();
    if (questions.length < 1) {
      await insertManyQuestions();
      console.log('Questions data added successfully.')
    }

    // seed topics data
    const topics = await findAllTopics();
    if (topics.length < 1) {
      await insertManyTopics();
      console.log('Topics data added successfully.')
    }
  } catch(e) {
    console.log('Database connection failed.');
    console.error(e);
  }
}

module.exports = connectDB;
