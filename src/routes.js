const express = require('express');
const {
  search, addAllQuestions, getAllQuestions, getAllTopics, addAllTopics
} = require('./controllers');

const router = express.Router();

router.get('/search', search);
router.get('/questions', getAllQuestions);
router.post('/questions', addAllQuestions);
router.get('/topics', getAllTopics);
router.post('/topics', addAllTopics);

module.exports = router;
