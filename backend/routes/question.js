// backend/routes/question.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Helper function to shuffle array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

router.get('/question', async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 1; // Default to 1 if count is not provided
    const questions = await Question.findAll();
    
    if (questions.length === 0) {
      return res.status(404).json({ error: 'No questions found' });
    }

    const selectedQuestions = [];
    for (let i = 0; i < Math.min(count, questions.length); i++) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      const answers = [
        question.correctAnswer,
        question.wrongAnswer1,
        question.wrongAnswer2,
        question.wrongAnswer3
      ].filter(Boolean); // Filter out any undefined answers

      if (answers.length < 4) {
        return res.status(500).json({ error: 'Insufficient answers available' });
      }

      const shuffledAnswers = shuffleArray(answers);

      selectedQuestions.push({
        question: question.questionText,
        answers: shuffledAnswers,
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
