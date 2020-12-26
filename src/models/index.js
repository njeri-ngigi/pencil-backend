const { model } = require('mongoose');
const questionSchema = require('./schemas/question');

const QuestionModel = model('Questions', questionSchema);

module.exports = {
   QuestionModel
};
