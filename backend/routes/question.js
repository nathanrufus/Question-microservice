const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/question', async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 1;
    const questions = await Question.findAll();
    
    if (questions.length === 0) {
      return res.status(404).json({ error: 'No questions found' });
    }

    const selectedQuestions = [];
    for (let i = 0; i < count; i++) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }

      const answers = [
        question.correctAnswer,
        question.wrongAnswer1,
        question.wrongAnswer2,
        question.wrongAnswer3
      ].filter(Boolean); // Filter out any undefined answers

      if (answers.length < 4) {
        return res.status(500).json({ error: 'Insufficient answers available' });
      }

      answers.sort(() => Math.random() - 0.5); // Shuffle answers

      selectedQuestions.push({
        question: question.questionText,
        answers: answers,
        correctAnswer: question.correctAnswer
      });
    }

    res.json(selectedQuestions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
