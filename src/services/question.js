const { QuestionModel } = require("../models");
const { reshapeQuestionData } = require("../utils/reshapeData");

const findQuestionsByAnnotation = async (annotations) => {
  return QuestionModel.find({ annotations });
};

const findAllQuestions = async () => {
    return QuestionModel.find().catch((e) => console.error(e));
};

const insertManyQuestions = async () => {
  const questions = reshapeQuestionData();
  return QuestionModel.insertMany(questions, {
    ordered: true,
  });
}

module.exports = {
  findQuestionsByAnnotation,
  findAllQuestions,
  insertManyQuestions,
};
