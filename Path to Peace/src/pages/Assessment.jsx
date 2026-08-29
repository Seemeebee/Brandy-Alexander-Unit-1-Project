// Imports useState to track changes
import { useState } from "react";

// Imports the questions
import questions from "../data/questions";

// Imports the Question component
import Question from "../components/Question";

function Assessment() {
  // Tracks the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Tracks the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Gets the current question
  const question = questions[currentQuestion];

  // Saves the selected answer score
  const handleAnswer = (questionId, score) => {
    setSelectedAnswer(score);
  };

  // Moves to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div>
      <h1>Anxiety Assessment</h1>

      {/* Displays the current question */}
      <Question
        question={question}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      {/* Shows Next after an answer is selected */}
      {selectedAnswer !== null && (
        <button onClick={handleNext}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default Assessment;