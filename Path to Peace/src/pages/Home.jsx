// Lets us create links between pages
import { Link } from "react-router-dom";

function Home() {
  return (
    // Main content of the Home page
    <main>
      {/* Main title of the website */}
      <h1>Path to Peace</h1>

      {/* Welcome message */}
      <h2>Your journey starts here.</h2>

      {/* Explains what the assessment does */}
      <p>
        Take a short assessment to better understand your anxiety
        and discover helpful coping strategies.
      </p>

      {/* Takes the user to the Anxiety Assessment */}
      <Link to="/assessment">
        <button>Start Assessment</button>
      </Link>

      {/* About section */}
      <section>
        <h2>About Path to Peace</h2>

        <p>
          Path to Peace is designed to help users understand their
          anxiety and find helpful resources for managing stress.
        </p>

        {/* Takes the user to the About page */}
        <Link to="/about">
          <button>About</button>
        </Link>
      </section>

      {/* Resources section */}
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

export default Home;
