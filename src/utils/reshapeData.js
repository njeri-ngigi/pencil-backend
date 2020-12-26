
const questionData = require('../models/database/data/questions');

const reshapeQuestionData = () => {
  const newQuestionDataShape = questionData.map((question) => {
    const qValues = Object.values(question);
    const qNumber = qValues.shift();
    return {
      qNumber,
      annotations: [...qValues]
    }
  });

  return newQuestionDataShape;
};

module.exports = {
  reshapeQuestionData
}
