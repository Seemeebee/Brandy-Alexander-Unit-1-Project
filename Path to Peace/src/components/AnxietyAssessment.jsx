// Lets us store information that changes while the user uses the app
import { useState } from "react";

// Lets us move the user to another page
import { useNavigate } from "react-router-dom";

// Gets the questions from our questions file
import questions from "../data/questions";

function AnxietyAssessment() {
  // Keeps track of which question the user is on
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Keeps track of the answer the user selected
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Keeps track of the user's total score
  const [score, setScore] = useState(0);

  // Stores an error message if the user does not select an answer
  const [error, setError] = useState("");

  // Lets us move to different pages
  const navigate = useNavigate();

  // Gets the current question from the questions list
  const question = questions[currentQuestion];

  // Saves the answer the user selected
  function handleAnswer(option) {
    setSelectedAnswer(option);

    // Removes the error message
    setError("");
  }

  // Moves the user to the next question
  function handleNext() {
    // Checks if the user selected an answer
    if (selectedAnswer === "") {
      setError("Please select an answer before continuing.");
      return;
    }

    // Adds the answer's score to the total score
    setScore(score + selectedAnswer.score);

    // Checks if there are more questions
    if (currentQuestion < questions.length - 1) {
      // Moves to the next question
      setCurrentQuestion(currentQuestion + 1);

      // Clears the previous answer
      setSelectedAnswer("");
    } else {
      // Sends the final score to the Results page
      navigate("/results", {
        state: { score: score + selectedAnswer.score },
      });
    }
  }

  return (
    // Main content of the Assessment page
    <main className="assessment">
      <h1>Anxiety Assessment</h1>

      {/* Shows which question the user is on */}
      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>

      <div className="question-card">
        {/* Displays the current question */}
        <h3>{question.question}</h3>

        {/* Displays all of the answer choices */}
        {question.options.map((option) => (
          <button
            className="answer-option"
            key={option.text}
            onClick={() => handleAnswer(option)}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Shows an error if the user has not selected an answer */}
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {/* Moves to the next question */}
      <button onClick={handleNext}>
        Next
      </button>
    </main>
  );
}

export default AnxietyAssessment;