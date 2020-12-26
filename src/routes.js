const express = require('express');
const {
  search, addAllQuestions, getAllQuestions
} = require('./controllers');

const router = express.Router();

router.get('/search', search);
router.get('/questions', getAllQuestions);
router.post('/questions', addAllQuestions);

module.exports = router;
