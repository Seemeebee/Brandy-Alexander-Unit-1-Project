import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnxietyAssessment from "./components/AnxietyAssessment";
import Results from "./components/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/assessment" element={<AnxietyAssessment />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;