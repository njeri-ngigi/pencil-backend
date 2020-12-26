
const questionData = require('../models/database/data/questions');
const topicsData = require('../models/database/data/topics');

const reshapeQuestionData = () => {
  const newQuestionDataShape = questionData.map((question) => {
    const qValues = Object.values(question);
    const qNumber = qValues.shift();
    return {
      qNumber,
      annotations: [...qValues],
    }
  });

  return newQuestionDataShape;
};

const reshapeTopicsData = () => topicsData.map((topics, ind) => ({
    tNumber: ind+1,
    path : Object.values(topics),
  }));

module.exports = {
  reshapeQuestionData,
  reshapeTopicsData,
}
