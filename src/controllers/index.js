const { searchByQueryParam } = require('./search');
const { addAllQuestions, getAllQuestions } = require('./question');
const { addAllTopics, getAllTopics } = require('./topic');

module.exports = {
  searchByQueryParam,
  addAllQuestions,
  getAllQuestions,
  getAllTopics,
  addAllTopics,
};
