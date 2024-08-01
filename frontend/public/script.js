// script.js
document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "http://localhost:3000/api"; // Docker service name

  try {
      const response = await fetch(`${apiUrl}/question`);

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const questions = await response.json();

      if (!Array.isArray(questions) || questions.length === 0) {
          throw new Error("No questions available");
      }

      const question = questions[0];
      const questionText = document.getElementById("question-text");
      const answersContainer = document.getElementById("answers-container");

      questionText.textContent = question.question;

      // Store the correct answer for later comparison
      const correctAnswer = question.correctAnswer;

      // Clear any previous answers
      answersContainer.innerHTML = '';

      question.answers.forEach((answer) => {
          const button = document.createElement("button");
          button.textContent = answer;

          button.addEventListener("click", () => {
              console.log('Button clicked:', answer);

              answersContainer.querySelectorAll("button").forEach(btn => {
                btn.style.backgroundColor = "";
                btn.style.color = "";
            });
        
            // Add style to the clicked button
            if (answer === correctAnswer) {
                button.style.backgroundColor = "lightgreen";
                button.style.color = "green";
            } else {
                button.style.backgroundColor = "lightcoral";
                button.style.color = "red";
            }
        
            // Display the correct answer
            const correctButton = Array.from(answersContainer.children).find(
                btn => btn.textContent === correctAnswer
            );
            if (correctButton) {
                correctButton.style.backgroundColor = "lightgreen";
                correctButton.style.color = "green";
            }
          });

          answersContainer.appendChild(button);
      });
  } catch (error) {
      console.error("Error:", error);
  }
});
