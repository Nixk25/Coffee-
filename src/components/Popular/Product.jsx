import React from 'react'
import "./Product.css"



const Product = ({data}) => {
  const {productName,price,productImage,category1,category2} = data
  
  return (
    <div className='product'>
        <div className="product-image"><img src={productImage} alt="coffee" /></div>
        <div className="product-texts">
          <div className="left">
            <div className="product-name">{productName}</div>
            <div className="categories">
              <div className="category-first">{category1}</div>
              <div className="category-second">{category2}</div>
            </div>
          </div>
          <div className="right">
            <div className="price">{price}</div>
          </div>
        </div>
    </div>
  )
}

export default Product