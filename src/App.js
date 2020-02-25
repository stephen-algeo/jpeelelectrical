import React from "react";
import "./App.scss";
import logo from "./jason-downlight.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>J Peel Electrical</h1>
        <h3>Domestic Electrician</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
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
        <div>
          <p>Fully Qualified and Certified.</p>
          <p>Father and Son Team.</p>
          <p>Over 30 years of experience (in people's homes)</p>
          <p>
            All work undertaken: ranging from putting up a light fitting to full
            house rewires.
          </p>
          <p>No callout charge.</p>
          <p>Call/text/whatsapp Jason 07929 850 056</p>
          <p>
            {"email: "}
            <a href="mailto:jpeelelectrical@gmail.com">
              jpeelelectrical@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
