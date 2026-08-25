//main component for the anxiety assessment

import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Results from "./Results";

function AnxietyAssessment() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleAnswer(questionId, score) {
    setAnswers({
      ...answers,
      [questionId]: score
    });
  }

  function calculateScore() {
    return Object.values(answers).reduce(
      (total, score) => total + score,
      0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Object.keys(answers).length !== questions.length) {
      return;
    }

    setSubmitted(true);
  }

  const allQuestionsAnswered =
    Object.keys(answers).length === questions.length;

  if (submitted) {
    return <Results score={calculateScore()} />;
  }

  return (
    <div>
      <h1>Path to Peace</h1>
      <h2>Anxiety Assessment</h2>

      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            selectedAnswer={answers[question.id]}
            onAnswer={handleAnswer}
          />
        ))}

        <button type="submit" disabled={!allQuestionsAnswered}>
          Submit Assessment
        </button>
      </form>
    </div>
  );
}

export default AnxietyAssessment;