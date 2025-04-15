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
        <img
          className="hero"
          src="images/jase.jpeg "
          alt="Jason sat on a step outside a previous job with his tools and drinking a coffee"
        />
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

          <p>Areas covered:</p>
          <ul>
            <li>Based in Nafferton</li>
            <li>Covering:</li>
            <li>Driffield</li>
            <li>Beverley</li>
            <li>Hornsea</li>
            <li>and everywhere inbetween</li>
          </ul>
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
          <img
            src="images/extension-downlights.jpeg"
            alt="downlight being install in a brightly lit extension"
          />
          <img
            src="images/outside-lights.jpeg"
            alt="a light being installed in a large garage"
          />
          <img
            src="images/fusebox.jpeg"
            alt="a freshly install fusebox (consumer unit)"
          />
          <img
            src="images/hanging-light.jpeg"
            alt="Jason up on a ladder installing a new light fitting"
          />
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
          <img
            src="images/qualification-nic-eic-domestic-install.jpeg"
            alt="official logo symbolising the NIC qualification"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
