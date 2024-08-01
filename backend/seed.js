const sequelize = require('./database');
const Question = require('./models/Question');

const seedQuestions = async () => {
  await sequelize.sync({ force: true }); // This will drop the existing tables and re-create them

  const questions = [
    {
      questionText: 'What is the capital of France?',
      correctAnswer: 'Paris',
      wrongAnswer1: 'London',
      wrongAnswer2: 'Berlin',
      wrongAnswer3: 'Madrid'
    },
    {
      questionText: 'What is 2 + 2?',
      correctAnswer: '4',
      wrongAnswer1: '3',
      wrongAnswer2: '5',
      wrongAnswer3: '6'
    },
    {
      questionText: 'Who wrote "To Kill a Mockingbird"?',
      correctAnswer: 'Harper Lee',
      wrongAnswer1: 'Mark Twain',
      wrongAnswer2: 'F. Scott Fitzgerald',
      wrongAnswer3: 'Ernest Hemingway'
    },
    {
      questionText: 'What is the boiling point of water?',
      correctAnswer: '100°C',
      wrongAnswer1: '90°C',
      wrongAnswer2: '110°C',
      wrongAnswer3: '120°C'
    },
    {
      questionText: 'What is the largest planet in our Solar System?',
      correctAnswer: 'Jupiter',
      wrongAnswer1: 'Earth',
      wrongAnswer2: 'Mars',
      wrongAnswer3: 'Saturn'
    },
    {
      questionText: 'What is the smallest prime number?',
      correctAnswer: '2',
      wrongAnswer1: '1',
      wrongAnswer2: '3',
      wrongAnswer3: '5'
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      correctAnswer: 'Leonardo da Vinci',
      wrongAnswer1: 'Vincent van Gogh',
      wrongAnswer2: 'Pablo Picasso',
      wrongAnswer3: 'Claude Monet'
    },
    {
      questionText: 'What is the capital of Japan?',
      correctAnswer: 'Tokyo',
      wrongAnswer1: 'Kyoto',
      wrongAnswer2: 'Osaka',
      wrongAnswer3: 'Nagoya'
    },
    {
      questionText: 'What is the chemical symbol for gold?',
      correctAnswer: 'Au',
      wrongAnswer1: 'Ag',
      wrongAnswer2: 'Pb',
      wrongAnswer3: 'Fe'
    },
    {
      questionText: 'What is the speed of light?',
      correctAnswer: '299,792 km/s',
      wrongAnswer1: '300,000 km/s',
      wrongAnswer2: '150,000 km/s',
      wrongAnswer3: '250,000 km/s'
    },
    {
      questionText: 'Who wrote the play "Romeo and Juliet"?',
      correctAnswer: 'William Shakespeare',
      wrongAnswer1: 'Charles Dickens',
      wrongAnswer2: 'George Orwell',
      wrongAnswer3: 'Jane Austen'
    },
    {
      questionText: 'What is the largest ocean on Earth?',
      correctAnswer: 'Pacific Ocean',
      wrongAnswer1: 'Atlantic Ocean',
      wrongAnswer2: 'Indian Ocean',
      wrongAnswer3: 'Southern Ocean'
    },
    {
      questionText: 'Who was the first President of the United States?',
      correctAnswer: 'George Washington',
      wrongAnswer1: 'Thomas Jefferson',
      wrongAnswer2: 'Abraham Lincoln',
      wrongAnswer3: 'John Adams'
    },
    {
      questionText: 'What is the hardest natural substance on Earth?',
      correctAnswer: 'Diamond',
      wrongAnswer1: 'Gold',
      wrongAnswer2: 'Iron',
      wrongAnswer3: 'Silver'
    },
    {
      questionText: 'What is the main ingredient in guacamole?',
      correctAnswer: 'Avocado',
      wrongAnswer1: 'Tomato',
      wrongAnswer2: 'Onion',
      wrongAnswer3: 'Pepper'
    },
    {
      questionText: 'What is the capital of Canada?',
      correctAnswer: 'Ottawa',
      wrongAnswer1: 'Toronto',
      wrongAnswer2: 'Vancouver',
      wrongAnswer3: 'Montreal'
    },
    {
      questionText: 'What is the currency of Japan?',
      correctAnswer: 'Yen',
      wrongAnswer1: 'Dollar',
      wrongAnswer2: 'Won',
      wrongAnswer3: 'Peso'
    },
    {
      questionText: 'Who discovered penicillin?',
      correctAnswer: 'Alexander Fleming',
      wrongAnswer1: 'Marie Curie',
      wrongAnswer2: 'Albert Einstein',
      wrongAnswer3: 'Isaac Newton'
    },
    {
      questionText: 'What is the largest bone in the human body?',
      correctAnswer: 'Femur',
      wrongAnswer1: 'Tibia',
      wrongAnswer2: 'Humerus',
      wrongAnswer3: 'Fibula'
    },
    {
      questionText: 'What is the smallest country in the world?',
      correctAnswer: 'Vatican City',
      wrongAnswer1: 'Monaco',
      wrongAnswer2: 'San Marino',
      wrongAnswer3: 'Liechtenstein'
    }
  ];

  await Question.bulkCreate(questions);

  console.log('Questions have been added');
  process.exit();
};

seedQuestions().catch(error => {
  console.error('Error seeding questions:', error);
  process.exit(1);
});
