// backend/models/Question.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Question extends Model {}

Question.init({
  questionText: { type: DataTypes.STRING, allowNull: false },
  correctAnswer: { type: DataTypes.STRING, allowNull: false },
  wrongAnswer1: { type: DataTypes.STRING, allowNull: false },
  wrongAnswer2: { type: DataTypes.STRING, allowNull: false },
  wrongAnswer3: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize,
  modelName: 'Question'
});

module.exports = Question;
