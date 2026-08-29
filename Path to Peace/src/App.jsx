import { Link } from "react-router-dom";

import purple from "./images/purple.png";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Path to Peace</h1>

      <h2>Your journey starts here.</h2>

      <img
        src={purple}
        alt="Peaceful purple lake and mountains representing calm and mental wellness"
      />

      <p>
        Take a short assessment to better understand your anxiety
        and discover helpful coping strategies.
      </p>

      <Link to="/assessment">
        <button>Start Assessment</button>
      </Link>

      <section>
        <h2>About Path to Peace</h2>

        <p>
          Path to Peace is designed to help users understand their
          anxiety and find helpful resources for managing stress.
        </p>

        <Link to="/about">
          <button>About</button>
        </Link>
      </section>

      <section>
        <h2>Resources</h2>

        <p>
          Explore mental health resources and information for
          additional support.
        </p>
      </section>
    </main>
  );
}

export default App;