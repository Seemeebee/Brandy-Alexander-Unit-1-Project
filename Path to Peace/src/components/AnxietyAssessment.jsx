import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function AnxietyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Get the current question
  const question = questions[currentQuestion];

  // Save the user's answer
  function handleAnswer(option) {
    setSelectedAnswer(option);
    setError("");
  }

  // Move to the next question
  function handleNext() {
    if (selectedAnswer === "") {
      setError("Please select an answer before continuing.");
      return;
    }

    setScore(score + selectedAnswer.score);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      navigate("/results", {
        state: { score: score + selectedAnswer.score },
      });
    }
  }

  return (
    <main className="assessment">
      <h1>Anxiety Assessment</h1>

      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>

      <div className="question-card">
        <h3>{question.question}</h3>

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

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <button onClick={handleNext}>
        Next
      </button>
    </main>
  );
}

export default AnxietyAssessment;