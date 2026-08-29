import { useState } from "react";
import questions from "../data/questions";

function AnxietyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  //Moves to the next question//

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const showNextButton = () => {
    
//Returns null if no answer is selected, otherwise displays the selected answer and a button to go to the next question//
    
    if (selectedAnswer === "") {
      return null;
    }

    return (
      <div>
        <p>You selected: {selectedAnswer}</p>
{/* Displays the selected answer and provides a button to go to the next question */}
        
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
      {/* Displays the answer options */}

      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
      {/* Shows the next button if an answer is selected */}

      {showNextButton()}
    </div>
  );
}

export default AnxietyAssessment;