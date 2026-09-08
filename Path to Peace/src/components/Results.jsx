// Gets the score from the assessment and lets us move between pages
import { useLocation, useNavigate } from "react-router-dom";

//Button
import Button from "./Button";

function Results() {
  // Gets information sent from the Assessment page
  const location = useLocation();

  // Lets the buttons move to different pages
  const navigate = useNavigate();

  // Gets the user's score
  const score = location.state.score;

  // Stores the recommended resource
  let resource = "";

  // Checks the score and gives a recommendation
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
    // Main content of the Results page
    <main>
      <h1>Your Results</h1>

      <p>Your total score is:</p>

      {/* Displays the user's score */}
      <h2>{score}</h2>

      <h2>Recommended Resource</h2>

      {/* Displays the recommendation based on the score */}
      <p>{resource}</p>

      {/* Takes the user back to the Home page */}
      <Button onClick={() => navigate("/home")}>
        Back to Home
      </Button>

      {/* Starts the assessment again */}
      <Button onClick={() => navigate("/assessment")}>
        Restart Assessment
      </Button>

      {/* Takes the user to the Mood Journal */}
      <Button onClick={() => navigate("/journal")}>
        Mood Journal
      </Button>
    </main>
  );
}

export default Results;
