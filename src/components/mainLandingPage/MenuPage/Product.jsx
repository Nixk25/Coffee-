import React, { useEffect } from "react";
import "./Product.css";
import WOW from "wowjs";

const Product = ({ data }) => {
  const { productName, productImage, price, descryption } = data;

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="menu-product animate__animated wow animate__backInUp animate__duration-1s  ">
      <div className="menu-product__image">
        <img src={productImage} alt={productName} />
      </div>
      <div className="menu-product__texts">
        <div className="left">
          <div className="menu-product__name">
            <strong>{productName}</strong>
          </div>
          <div className="categories">
            <div className="descryption-wrapper">
              <p className="descryption">{descryption}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <strong>{price}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
