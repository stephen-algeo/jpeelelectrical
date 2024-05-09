import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="jpeel electrical logo"
          className="main-logo"
          src="./jpeel-logo.png"
        />
        <h2>Local domestic electrician</h2>
        <img className="hero" src="images/jase.jpeg"></img>
      </header>
      <section>
        <div></div>

        <div className="info">
          <p>Over 20 years of experience working in people's homes</p>
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
        </div>
        <div className="images">
          <img src="images/extension-downlights.jpeg" />
          <img src="images/outside-lights.jpeg" />
          <img src="images/fusebox.jpeg" />
          <img src="images/hanging-light.jpeg" />
        </div>
        <div className="call">
          <a
            className="btn"
            target="_blank"
            href="tel:+447929850056"
            rel="noopener noreferrer"
          >
            <span id="primary_cta_1">
              <span>Call or text Jason </span>
              <br />
              <span>07929 850 056</span>
            </span>
          </a>
        </div>
        <div>
          <p className="email">
            {"email: "}
            <a href="mailto:jpeelelectrical@gmail.com">
              jpeelelectrical@gmail.com
            </a>
          </p>
        </div>
        <div className="images">
          <img src="images/qualification-nic-eic-domestic-install.jpeg" />
        </div>
      </section>
    </div>
  );
}

export default App;
