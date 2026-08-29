// Lets us store information that changes while the user uses the app
import { useState } from "react";

// Lets us move the user to another page
import { useNavigate } from "react-router-dom";

// Gets the questions from our questions file
import questions from "../data/questions";

// Imports the reusable Question component
import Question from "./Question";

function AnxietyAssessment() {
  // Keeps track of which question the user is on
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Keeps track of the answer the user selected
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Keeps track of the user's total score
  const [score, setScore] = useState(0);

  // Stores an error message
  const [error, setError] = useState("");

  // Lets us move to different pages
  const navigate = useNavigate();

  // Gets the current question
  const question = questions[currentQuestion];

  // Saves the answer selected by the user
  function handleAnswer(questionId, answerScore) {
    setSelectedAnswer(answerScore);
    setError("");
  }

  // Moves the user to the next question
  function handleNext() {
    // Makes sure the user selected an answer
    if (selectedAnswer === "") {
      setError("Please select an answer before continuing.");
      return;
    }

    // Adds the selected answer to the total score
    const newScore = score + selectedAnswer;

    // Saves the new score
    setScore(newScore);

    // Checks if there are more questions
    if (currentQuestion < questions.length - 1) {
      // Moves to the next question
      setCurrentQuestion(currentQuestion + 1);

      // Clears the selected answer
      setSelectedAnswer("");
    } else {
      // Sends the final score to the Results page
      navigate("/results", {
        state: { score: newScore },
      });
    }
  }

  return (
    <main className="assessment">
      <h1>Anxiety Assessment</h1>

      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>

      {/* Reusable Question child component */}
      <Question
        question={question}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      {/* Shows an error if the user did not select an answer */}
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {/* Moves to the next question */}
      <button onClick={handleNext}>
        {currentQuestion === questions.length - 1
          ? "See Results"
          : "Next"}
      </button>
    </main>
  );
}

export default AnxietyAssessment;