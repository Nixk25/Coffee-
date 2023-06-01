import React from 'react'
import "./Popular.css"
import { products } from '../data-popular'
import Product from "./Product";

const Popular = () => {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular-headline">
          Popular <span className='colored underlined'>Now</span> 
        </div>
        <div className="products">
          {products.map((oneProduct)=>(
            <Product data={oneProduct}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular