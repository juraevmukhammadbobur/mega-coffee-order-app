import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";

const root = document.getElementById("root");

{
  root
    ? createRoot(root).render(
        <StrictMode>
          <App />
        </StrictMode>
      )
    : console.error("Fatal Error: The root element was not found in the DOM.");
}
