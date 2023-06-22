import React from "react";
import "./Menu.css";
import { products } from "./data-menu";
import Product from "./Product";

const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <div className="headline">
          Special menu <span className="colored underlined">For you </span>
        </div>
        <div className="menu-products">
          {products.map((product) => {
            const { id } = product;
            return <Product key={id} data={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
