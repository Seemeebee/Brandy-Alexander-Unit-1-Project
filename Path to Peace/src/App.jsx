// Imports React Router so we can move between pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnxietyAssessment from "./components/AnxietyAssessment";
import Results from "./components/Results";
import MoodJournal from "./components/MoodJournal";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    // Allows the app to use React Router
    <BrowserRouter>
      <Header />
      <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/assessment" element={<AnxietyAssessment />} />
  <Route path="/results" element={<Results />} />
  <Route path="/journal" element={<MoodJournal />} />
  <Route path="/about" element={<About />} />
</Routes>

      <Footer />  
    </BrowserRouter>
  );
}

export default App;