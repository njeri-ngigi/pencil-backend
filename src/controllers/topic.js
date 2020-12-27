const { insertManyTopics, findAllTopics } = require("../services/topic");

const addAllTopics = async (req, res) => {
  try {
    const topics = await insertManyTopics();
    return res.status(201).send({ topics });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went terribly wrong. Data might already exist.' });
  }
};

const getAllTopics = async (req, res) => {
  try {
    const topics = await findAllTopics();
    return res.status(200).send({ topics });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went wrong. Try again.' });
  }
}

module.exports = {
  addAllTopics,
  getAllTopics,
};
