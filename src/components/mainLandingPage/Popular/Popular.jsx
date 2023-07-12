import React, { useEffect } from "react";
import "./Popular.css";
import { products } from "./data-popular";
import Product from "./Product";
import WOW from "wowjs";

const Popular = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section className="popular animate__animated wow animate__backInUp animate__duration-1s ">
      <div className="container">
        <div className="headline">
          Popular <span className="colored underlined">Now</span>
        </div>
        <div className="products">
          {products.map((oneProduct) => {
            const { id } = oneProduct;
            return <Product key={id} data={oneProduct} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
