//displays one question 

function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>

      {question.options.map((option) => (
        <label key={option.text}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option.score}
            checked={selectedAnswer === option.score}
            onChange={() => onAnswer(question.id, option.score)}
          />

          {option.text}
        </label>
      ))}
    </div>
  );
}

export default Question;