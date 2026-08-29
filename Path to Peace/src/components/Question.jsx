// Displays one question and its answer choices

function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <section className="question-card">

      {/* Displays the question */}
      <h3>{question.question}</h3>

      {/* Creates a button for each answer */}
      {question.options.map((option) => (
        <button
          className="answer-option"

          // Gives each answer a unique key
          key={option.text}

          // Sends the question id and score when clicked
          onClick={() =>
            onAnswer(question.id, option.score)
          }
        >
          {/* Displays the answer text */}
          {option.text}
        </button>
      ))}
    </section>
  );
}

// Makes Question available to other files
export default Question;