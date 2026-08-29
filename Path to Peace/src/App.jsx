import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnxietyAssessment from "./components/AnxietyAssessment";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<AnxietyAssessment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;