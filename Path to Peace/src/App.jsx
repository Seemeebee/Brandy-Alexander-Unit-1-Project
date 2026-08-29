import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnxietyAssessment from "./components/AnxietyAssessment";
import Results from "./components/Results";
import MoodJournal from "./components/MoodJournal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/assessment" element={<AnxietyAssessment />} />
  <Route path="/results" element={<Results />} />
  <Route path="/journal" element={<MoodJournal />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;