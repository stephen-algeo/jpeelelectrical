import React from "react";
import "./App.scss";
import logo from "./downlights.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>J Peel Electrical</h1>
        <h2>Local domestic electrician</h2>
      </header>
      <section>
        <div></div>
        <div className="info">
          <p>
            Father and Son Team with over 30 years
            <br /> of experience working in people's homes
          </p>
          <p>Fully Qualified and registered.</p>
          <p>
            No callout charge, happy to come look
            <br /> and advise for free.
          </p>
          <p>
            All work undertaken, from putting up a light fitting
            <br /> to full house rewires.
          </p>

          <p>
            Areas covered:
            <ul>
              <li>Cleckheaton</li>
              <li>Huddersfield</li>
              <li>Wakefield</li>
              <li>Halifax</li>
              <li>Bradford</li>
              <li>Brighouse</li>
              <li>Morley</li>
              <li>and all surrounding areas</li>
            </ul>
          </p>

          <p>
            {"email: "}
            <a href="mailto:jpeelelectrical@gmail.com">
              jpeelelectrical@gmail.com
            </a>
          </p>
        </div>
        <div className="call">
          <a
            className="btn"
            target="_blank"
            href="tel:+447929850056"
            rel="noopener noreferrer"
          >
            <span id="primary_cta_1">
              <span>Call </span>
              <span>07929 850056</span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
