import React from "react";
import "./ChooseUs.css";
import FirstCard from "./Cards/FirstCard";
import SecondCard from "./Cards/SecondCard";
import ThirdCard from "./Cards/ThirdCard";
import FourthCard from "./Cards/FourthCard";

const ChooseUs = () => {
  return (
    <section className="chooseUs">
      <div className="container">
        <div className="headline-wrapper">
          <div className="headline-chooseUs">
            <h1>Why choose us?</h1>
          </div>
          <div className="desc-chooseUs">
            <p>
              Why we are thinking that we are {""}
              <span className="colored underlined">
                better than the others?
              </span>
            </p>
          </div>
        </div>
        <section className="card-section">
          <FirstCard />
          <SecondCard />
          <ThirdCard />
          <FourthCard />
        </section>
      </div>
    </section>
  );
};

export default ChooseUs;
