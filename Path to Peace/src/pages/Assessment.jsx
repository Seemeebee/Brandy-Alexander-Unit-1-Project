import { useState } from "react";
import questions from "../data/questions";

function AnxietyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const showNextButton = () => {
    if (selectedAnswer === "") {
      return null;
    }

    return (
      <div>
        <p>You selected: {selectedAnswer}</p>

        <button onClick={handleNext}>
          Next Question
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Anxiety Assessment</h1>

      <h2>{question.question}</h2>

      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}

      {showNextButton()}
    </div>
  );
}

export default AnxietyAssessment;