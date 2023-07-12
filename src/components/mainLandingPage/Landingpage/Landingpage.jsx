import React, { useEffect } from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const Landingpage = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section className="landingPage">
      <div className="bg-image"></div>
      <div className="container">
        <div className="texts">
          <div className="main-text">
            Enjoy your <span className="colored">coffee</span> <br /> before
            work
          </div>
          <div className="second-text">
            Boost your <span className="colored">productivity</span> and build
            your <br /> mood with a{" "}
            <span className="colored">a cup of our coffee</span> in the morning
          </div>
          <Link className="order-btn__link" to="/Contact">
            <button className="order-btn wow animate__animated animate__bounce animate__duration-1s animate__delay-1s">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
