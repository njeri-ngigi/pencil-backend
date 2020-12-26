const { findQuestionsFromSearchQuery } = require("../services/search");

const searchByQueryParam = async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).send({ message: "Please provide a query param to search."})
    }

    const query = q.trim();
    const questions = await findQuestionsFromSearchQuery(query);

    res.status(200).send({ questions });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went wrong. Try again.' });
  }
}

module.exports = {
  searchByQueryParam
};
