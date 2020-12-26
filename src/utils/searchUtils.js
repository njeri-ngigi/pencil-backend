const extractTopicsToSearch = (topics, query) => {
  const topicsToSearchFor = [];
  const topicIndex  = topics[0].path.indexOf(query);

  topics.forEach(({ path }) => {
    const validTopics = path.slice(topicIndex);
    validTopics.forEach((topic)=>{
      if (topicsToSearchFor.indexOf(topic) === -1) {
        topicsToSearchFor.push(topic);
      }
    })
  });

  return topicsToSearchFor;
};

module.exports = {
  extractTopicsToSearch,
};
