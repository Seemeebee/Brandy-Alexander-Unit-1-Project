// Displays one question and its answer choices

function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <section className="question-card">
      {/* Displays the question */}

      <h3>{question.question}</h3>
      {/* Displays all answer choices */}

      {question.options.map((option) => (
        <button
          className="answer-option"
          key={option.text}
          onClick={() => onAnswer(option)}
        >
          {option.text}
        </button>
      ))}
    </section>
  );
}

export default Question;