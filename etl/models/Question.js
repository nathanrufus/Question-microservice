const {
	DataTypes,
} = require("sequelize")
const sequelize = require("../database")

const Question = sequelize.define(
	"Question",
	{
		questionText: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		correctAnswer: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		wrongAnswer1: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		wrongAnswer2: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		wrongAnswer3: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}
)

module.exports = Question
