import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.delac.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mary Pourganji
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MaryPG21/react-weatherApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/creative-sunburst-bd79fc"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
