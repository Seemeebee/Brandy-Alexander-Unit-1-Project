// Imports React tools
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Imports BrowserRouter for page routing
import { BrowserRouter } from "react-router-dom";

// Imports the App
import App from "./App.jsx";

// Imports styles
import "./index.css";

// Displays the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);