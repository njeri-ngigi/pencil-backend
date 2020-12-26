const { insertManyQuestions, findAllQuestions } = require("../services/question");

const addAllQuestions = async (req, res) => {
  try {
    const questions = await insertManyQuestions();
    return res.status(201).send({ questions });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went terribly wrong. Data might already exist.' });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await findAllQuestions();
    return res.status(200).send({ questions });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went wrong. Try again.' });
  }
}

module.exports = {
  addAllQuestions,
  getAllQuestions,
};
