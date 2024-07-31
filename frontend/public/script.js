// frontend/public/script.js
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/question');
    const questions = await response.json();
    const question = questions[0];
  
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
  
    questionText.textContent = question.question;
  
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.onclick = () => {
        if (answer === question.correctAnswer) {
          button.classList.add('correct');
        } else {
          button.classList.add('incorrect');
        }
      };
      answersContainer.appendChild(button);
    });
  });
  