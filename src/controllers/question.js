const { insertManyQuestions, findAllQuestions } = require("../services/question");

const addAllQuestions = async (req, res) => {
  const questions = await insertManyQuestions();
  if (!questions) {
    return res.status(500).send({ message: 'Something went terribly wrong.' });
  }
  res.status(201).send({ questions });
};

const getAllQuestions = async (req, res) => {
  const questions = await findAllQuestions();
  if (!questions) {
    return res.status(500).send({ message: 'Something went wrong. Try again.' });
  }
  res.status(200).send({ questions });
}

module.exports = {
  addAllQuestions,
  getAllQuestions,
}
