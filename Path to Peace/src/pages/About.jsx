// Lets us create links between pages 
import { Link } from "react-router-dom";

// About page for Path to Peace

function About() {
  return (
    // Main content of the About page
    <main>
      
      <h1>About Path to Peace</h1>

      
      <section>
        <h2>Our Purpose</h2>

        <p>
          Path to Peace is a simple mental health app designed to
          help users learn more about their anxiety and find helpful
          coping strategies.
        </p>
      </section>

      
      <section>
        <h2>Anxiety Assessment</h2>

        <p>
          The assessment asks questions about how you have been
          feeling. Your answers are used to calculate a score and
          provide a general recommendation.
        </p>
      </section>

      
      <section>
        <h2>Mood Journal</h2>

        <p>
          The Mood Journal allows you to write down your thoughts
          and feelings. You can save your entries and delete them
          when you no longer need them.
        </p>
      </section>

    
      <section>
        <h2>Important Information</h2>

        <p>
          Path to Peace is an educational tool and is not a
          replacement for professional mental health care.
        </p>
      </section>
      {/* Takes the user back to the Home page */} 

      <Link to="/home">
       <button>Home</button> 
    </Link>
    </main>
  );
}

export default About;