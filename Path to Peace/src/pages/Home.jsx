// Lets us create links between pages
import { Link } from "react-router-dom";

function Home() {
  return (
    // Main content of the Home page
    <main>
      
      <h1>Path to Peace</h1>

      
      <h2>Your journey starts here.</h2>

    
      <p>
        Take a short assessment to better understand your anxiety
        and discover helpful coping strategies.
      </p>

      {/* Takes the user to the Anxiety Assessment */}
      <Link to="/assessment">
        <button>Start Assessment</button>
      </Link>

      <section>
        <h2>About Path to Peace</h2>

        <p>
          Path to Peace is designed to help users understand their
          anxiety and find helpful resources for managing stress.
        </p>
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

export default Home;