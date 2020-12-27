const { model } = require('mongoose');
const questionSchema = require('./schemas/question');
const topicSchema = require('./schemas/topic');

const QuestionModel = model('Questions', questionSchema);
const TopicModel = model('Topics', topicSchema);

module.exports = {
   QuestionModel,
   TopicModel,
};
