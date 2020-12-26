const { QuestionModel } = require("../models");
const { reshapeQuestionData } = require("../utils/reshapeData");

const findOneQuesiton =  async (qNumber) => {
  return QuestionModel.findOne({ qNumber }).catch((e) => console.error(e));
}

const createQuestion = async (question) => {
  let foundQuestion = await findOneQuesiton(question.qNumber);
  if (!foundQuestion) {
    foundQuestion = QuestionModel.create(question).catch((e) => console.error(e));
  }
  return foundQuestion;
}

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
  findOneQuesiton, createQuestion, findAllQuestions, insertManyQuestions,
};
