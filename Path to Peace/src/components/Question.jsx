// Displays one question and its answer choices

function Question({ question, selectedAnswer, onAnswer }) {
  return (
  
    <section>
      {/* Displays the question */}
      <h2>{question.question}</h2>

      {/* Displays all of the answer choices */}
      {question.options.map((option) => (
        <label key={option.text}>
          
          {/* Creates a radio button for each answer */}
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option.score}
            checked={selectedAnswer === option.score}
            onChange={() => onAnswer(question.id, option.score)}
          />

          {/* Displays the answer text */}
          {option.text}
        </label>
      ))}
    </section>
  );
}

export default Question;