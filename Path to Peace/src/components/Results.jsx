import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();

  const score = location.state.score;

  let resource = "";

  if (score <= 17) {
    resource = "Try a 5-minute breathing exercise.";
  } else if (score <= 35) {
    resource =
      "Consider talking with someone you trust or a mental health professional.";
  } else {
    resource =
      "Consider reaching out to a mental health professional for additional support. SAMHSA National Helpline: 1-800-662-HELP (4357).";
  }

  return (
    <div>
      <h1>Your Results</h1>

      <p>Your total score is:</p>

      <h2>{score}</h2>

      <h2>Recommended Resource</h2>

      <p>{resource}</p>
    </div>
  );
}

export default Results;