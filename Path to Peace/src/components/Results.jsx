//displays the user's final score

function Results({ score }) {
  return (
    <div>
      <h1>Your Results</h1>

      <h2>Anxiety Score: {score}</h2>

      <p>
        Thank you for completing the Path to Peace anxiety assessment.
      </p>
    </div>
  );
}

export default Results;