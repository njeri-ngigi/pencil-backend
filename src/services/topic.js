const { TopicModel } = require("../models");
const { reshapeTopicsData } = require("../utils/reshapeData");

const findAllTopics = async () => {
  return TopicModel.find().catch((e) => console.error(e));
};

const insertManyTopics = async () => {
  const topics = reshapeTopicsData();
  return TopicModel.insertMany(topics, {
    ordered: true,
  });
}

const findTopicPaths = async (path) => {
 return TopicModel.find({ path });
}

module.exports = {
  insertManyTopics,
  findAllTopics,
  findTopicPaths,
};
