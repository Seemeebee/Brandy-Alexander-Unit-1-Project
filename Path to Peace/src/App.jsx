// Imports routing tools
import { Routes, Route } from "react-router-dom";

// Imports the pages
import Home from "./pages/Home";
import About from "./pages/About";

// Imports the components
import AnxietyAssessment from "./components/AnxietyAssessment";
import Results from "./components/Results";
import MoodJournal from "./components/MoodJournal";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Displays the header */}
      <Header />

      {/* Controls which page is displayed */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        {/* Assessment page */}
        <Route
          path="/assessment"
          element={<AnxietyAssessment />}
        />

        {/* Results page */}
        <Route path="/results" element={<Results />} />

        {/* Mood Journal page */}
        <Route path="/journal" element={<MoodJournal />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

      </Routes>

      {/* Displays the footer */}
      <Footer />
    </>
  );
}

// Makes App available to main.jsx
export default App;