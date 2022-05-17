const express = require('express');
const router = express.Router();

const questions = require('../controllers/questions');

router.get('/listquestion', questions.listQuestions);

router.post('/addquestion', questions.addQuestion);

router.get('/:nameofcour/:level', questions.getQuestionOfLevel);

module.exports = router;