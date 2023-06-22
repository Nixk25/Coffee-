import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
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
            <button className="order-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
