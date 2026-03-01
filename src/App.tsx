import React from "react";
import "./App.scss";
import EmblaCarousel from "./EmblaCarousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="JPeel Electrical - Qualified Electrician Nafferton"
          className="main-logo"
          src="./jpeel-logo.png"
        />
        <h1>Local domestic electrician</h1>
        <picture>
          <source srcSet="images/jase.webp" type="image/webp" />
          <img
            className="hero"
            src="images/jase.jpeg"
            alt="Jason sat on a step outside a previous job with his tools and drinking a coffee"
            width="1200"
            height="1600"
            style={{ height: 'auto' }}
          />
        </picture>
      </header>
      <section className="main">
        <div></div>

        <div className="info">
          <p>Over 20 years of experience working in people's homes</p>
          <p>Fully Qualified and registered. NIC EIC registered.</p>
          <p>
            No callout charge, happy to come look
            <br /> and advise for free.
          </p>
          <p>
            All work undertaken, from putting up a light fitting
            <br /> to full house rewires.
          </p>

          <h3>Areas covered:</h3>
          <ul>
            <li>Based in Nafferton</li>
            <li>Covering:</li>
            <li>Driffield</li>
            <li>Beverley</li>
            <li>Hornsea</li>
            <li>and everywhere inbetween</li>
          </ul>
        </div>

        <address className="call">
          <a target="_blank" href="tel:+447929850056" rel="noopener noreferrer">
            <div className="btn">
              Call or text Jason
              <br />
              07929 850 056
            </div>
          </a>
        </address>

        <EmblaCarousel />

        <div>
          <p className="email">
            {"email: "}
            <a href="mailto:jpeelelectrical@gmail.com">
              jpeelelectrical@gmail.com
            </a>
          </p>
        </div>

        <div className="images">
          <picture>
            <source srcSet="images/extension-downlights.webp" type="image/webp" />
            <img
              src="images/extension-downlights.jpeg"
              alt="downlight being install in a brightly lit extension"
              loading="lazy"
              width="1200"
              height="1600"
            />
          </picture>
          <picture>
            <source srcSet="images/outside-lights.webp" type="image/webp" />
            <img
              src="images/outside-lights.jpeg"
              alt="a light being installed in a large garage"
              loading="lazy"
              width="1200"
              height="1600"
            />
          </picture>
          <picture>
            <source srcSet="images/fusebox.webp" type="image/webp" />
            <img
              src="images/fusebox.jpeg"
              alt="a freshly install fusebox (consumer unit)"
              loading="lazy"
              width="1600"
              height="1200"
            />
          </picture>
          <picture>
            <source srcSet="images/hanging-light.webp" type="image/webp" />
            <img
              src="images/hanging-light.jpeg"
              alt="Jason up on a ladder installing a new light fitting"
              loading="lazy"
              width="1200"
              height="1600"
            />
          </picture>
        </div>
        <address className="call">
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
        </address>
        <div>
          <p className="email">
            {"email: "}
            <a href="mailto:jpeelelectrical@gmail.com">
              jpeelelectrical@gmail.com
            </a>
          </p>
        </div>
        <div className="images qualification">
          <picture>
            <source srcSet="images/qualification-nic-eic-domestic-install.webp" type="image/webp" />
            <img
              src="images/qualification-nic-eic-domestic-install.jpeg"
              alt="official logo symbolising the NIC qualification"
              loading="lazy"
              width="1181"
              height="599"
            />
          </picture>
        </div>
      </section>
    </div>
  );
}

export default App;
