// Imports useState to track changes
import { useState } from "react";

// Imports useNavigate to move to another page
import { useNavigate } from "react-router-dom";

// Imports the questions
import questions from "../data/questions";

// Imports the Question component
import Question from "./Question";

function AnxietyAssessment() {
  // Tracks the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Tracks the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Tracks the total score
  const [score, setScore] = useState(0);

  // Lets us move to the Results page
  const navigate = useNavigate();

  // Gets the current question
  const question = questions[currentQuestion];

  // Saves the selected answer
  const handleAnswer = (questionId, answerScore) => {
    setSelectedAnswer(answerScore);
  };

  // Moves to the next question
  const handleNext = () => {
    // Adds the selected answer to the total score
    const newScore = score + selectedAnswer;

    setScore(newScore);

    // Checks if there are more questions
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      // Clears the previous answer
      setSelectedAnswer(null);
    } else {
      // Goes to Results after the last question
      navigate("/results", {
        state: { score: newScore },
      });
    }
  };

  return (
    <div>
      <h1>Anxiety Assessment</h1>

      {/* Shows what question the user is on */}
      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>

      {/* Displays the current question */}
      <Question
        question={question}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      {/* Shows button after an answer is selected */}
      {selectedAnswer !== null && (
        <button onClick={handleNext}>
          {currentQuestion === questions.length - 1
            ? "See Results"
            : "Next Question"}
        </button>
      )}
    </div>
  );
}

export default AnxietyAssessment;