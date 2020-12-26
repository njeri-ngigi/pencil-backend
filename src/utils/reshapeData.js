
const questionData = require('../models/database/data/questions');
const topicsData = require('../models/database/data/topics');

const reshapeQuestionData = () => {
  const newQuestionDataShape = questionData.map((question) => {
    let qValues = Object.values(question);
    const qNumber = qValues.shift();
    qValues = qValues.map(str => str.trim());

    return {
      qNumber,
      annotations: [...qValues],
    }
  });

  return newQuestionDataShape;
};

const reshapeTopicsData = () => topicsData.map((topics, ind) => {
  let path = Object.values(topics);
  path = path.map((str) => str.trim());

  return {
    tNumber: ind+1,
    path : Object.values(topics),
  }
});

module.exports = {
  reshapeQuestionData,
  reshapeTopicsData,
}
