import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  function disappearFunction(event) {
    event.preventDefault();
    document.querySelector(".newsletter-btn").textContent = "Loading";
    setTimeout(() => {
      document.getElementById("new-element").style.display = "flex";
      document.getElementById("bg-image__newsletter").style.display = "none";
    }, 2000);
  }
  return (
    <section className="newsletter ">
      <div className="container">
        <div id="bg-image__newsletter">
          <div id="newsletter-wrapper">
            <div className="newsletter-text">
              Subscribe to get <span className="colored">50%</span> discount
              price
            </div>
            <form onSubmit={disappearFunction} className="input-wrapper">
              <input
                className="newsletter-input"
                required
                type="email"
                id="email"
                placeholder="Email Address"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div id="new-element">
          <p>Thanks for subscription! 😁</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
