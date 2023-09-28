import React, { useState } from "react";
import "./Menu.css";
import { products } from "./data-menu";
import Product from "./Product";
import categories from "./categories";

const Menu = () => {
  const [typeOfProduct, setTypeOfProduct] = useState("All");

  const filteredProducts = products.filter((oneProduct) => {
    return oneProduct["category"] === typeOfProduct;
  });
  return (
    <section className="menu">
      <div className="container">
        <div className="headline menu-headline ">
          Special menu <span className="colored underlined">For you </span>
        </div>
        <div className="filter-buttons animate__animated wow animate__backInUp animate__duration-1s">
          {categories.map((oneCategory) => {
            return (
              <button
                key={oneCategory}
                onClick={() => setTypeOfProduct(oneCategory)}
                className="order-btn"
              >
                {oneCategory}
              </button>
            );
          })}
        </div>
        <div className="menu-products">
          {typeOfProduct === "All"
            ? products.map((oneProduct) => {
                const { id } = oneProduct;
                return <Product key={id} data={oneProduct} />;
              })
            : filteredProducts.map((oneProduct) => {
                const { id } = oneProduct;
                return <Product key={id} data={oneProduct} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
