const express = require('express');
const {
  searchByQueryParam, addAllQuestions, getAllQuestions, getAllTopics, addAllTopics
} = require('./controllers');

const router = express.Router();

router.get('/search', searchByQueryParam);
router.get('/questions', getAllQuestions);
router.post('/questions', addAllQuestions);
router.get('/topics', getAllTopics);
router.post('/topics', addAllTopics);

module.exports = router;
