const { findTopicPaths } = require('./topic');
const { findQuestionsByAnnotation } = require('./question');
const { extractTopicsToSearch } = require("../utils/searchUtils");


const findQuestionsFromSearchQuery = async (query) => {
  const questions = [];
  const topics = await findTopicPaths(query);
  
  if (topics.length > 0) {
    const topicsToSearchFor = extractTopicsToSearch(topics, query);

    for (let i = 0; i < topicsToSearchFor.length; i++) {
      const topic = topicsToSearchFor[i];
      const questionsSet = await findQuestionsByAnnotation(topic);

      if (questionsSet.length > 0) {
        questionsSet.forEach(({ qNumber })=> {
          if (questions.indexOf(qNumber) === -1) {
            questions.push(qNumber)
          };
        });
      }
    }
  }
  
  return questions;
}

module.exports = {
  findQuestionsFromSearchQuery,
};
