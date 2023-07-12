import React, { useEffect } from "react";
import { FaClipboardList } from "react-icons/fa";
import WOW from "wowjs";
import "animate.css";

const FirstCard = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="card animate__animated animate__bounceInLeft animate-duration-1s wow ">
      <div className="card-wrapper">
        <div className="card-headline">
          <h3>Our coffee menu</h3>
        </div>
        <div className="card-desc">
          And when it comes to our menu, we've got something for everyone. From
          classic pastries and breakfast sandwiches to creative salads and
          sandwiches, our menu is designed to satisfy a wide range of tastes and
          preferences. And of course, we offer a variety of dairy-free and
          gluten-free options to accommodate any dietary needs.
        </div>
        <div className="card-span">
          <span className="icon">
            <FaClipboardList />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
