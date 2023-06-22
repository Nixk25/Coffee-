import React from "react";
import "./Process.css";
import { Link } from "react-router-dom";
import processImg from "../../../assets/coffee-beans.jpg";
import { FaMoneyBillWave } from "react-icons/fa";
import { CiCoffeeBean } from "react-icons/ci";
import { GiPush } from "react-icons/gi";
import { BiCoffee } from "react-icons/bi";

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="process-wrapper">
          <div className="process-left">
            <div className="process-headline">
              <h1 className="headline-process">
                Process of our coffee production
              </h1>
              <p className="process-desc">
                The process of coffee production can be broken down into several
                key stages, from growing the coffee plants to serving the final
                cup of coffee.
              </p>
            </div>
            <Link className="order-btn__link" to="/Contact">
              <button className="order-btn">Contact Us</button>
            </Link>
            <div className="process-image">
              <img src={processImg} alt="coffee beans from Columbia" />
            </div>
          </div>
          <div className="process-right">
            <div className="reasons">
              <ul className="list-reasons">
                <li className="first-reason">
                  <span className="colored bigger">Buying it</span> <br />{" "}
                  <br />
                  <p>
                    Our coffee is sourced from the Colombian coffee growing
                    axis, which is known for producing some of the best coffee
                    in the world. We work with local farmers who grow the coffee
                    beans in nutrient-rich soil and under ideal weather
                    conditions, ensuring that the coffee is of the highest
                    quality.
                  </p>
                  <span className="reason-circle">
                    <FaMoneyBillWave />
                  </span>
                </li>
                <li className="second-reason">
                  <span className="colored bigger">Pressing</span> <br /> <br />
                  <p>
                    Once the coffee beans are harvested, they are carefully
                    processed to remove the outer layers and reveal the
                    flavorful inner beans. The beans are then roasted to
                    perfection, bringing out the unique flavors and aromas of
                    the coffee.
                  </p>
                  <span className="reason-circle">
                    <GiPush />
                  </span>
                </li>
                <li className="third-reason">
                  <span className="colored bigger">Brewing</span> <br /> <br />
                  <p>
                    At our coffee shop, we take pride in our brewing process. We
                    use state-of-the-art equipment to ensure that each cup of
                    coffee is brewed to perfection. Our baristas are highly
                    trained and skilled in the art of coffee making, and they
                    take great care in preparing each cup of coffee.
                  </p>
                  <span className="reason-circle">
                    <CiCoffeeBean />
                  </span>
                </li>
                <li className="fourth-reason">
                  <span className="colored bigger">Enjoying</span> <br /> <br />
                  <p>
                    When you visit our coffee shop, you can expect to be greeted
                    by the rich aroma of freshly brewed coffee. Our baristas
                    will take the time to understand your preferences and
                    recommend the perfect coffee for you. Whether you prefer a
                    bold and robust coffee or a smooth and mellow blend, we have
                    something for everyone.
                  </p>
                  <span className="reason-circle">
                    <BiCoffee />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
