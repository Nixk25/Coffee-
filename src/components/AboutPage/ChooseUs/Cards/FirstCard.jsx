import React, { useEffect } from 'react'
import {BiCoffee} from "react-icons/bi"
import "animate.css"
import WOW from "wowjs";

const FirstCard = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div className=" wow card animate__animated animate__bounceInLeft animate__duration-2s animate__delay-1s">
      <div className="card-wrapper">
        <div className="card-headline">
          <h3>Quality of our coffee</h3>
        </div>
        <div className="card-desc">
          First and foremost, we pride ourselves on the quality of our coffee. Our beans are carefully selected and roasted to perfection, ensuring that every cup is rich, flavorful, and satisfying. Whether you prefer a classic espresso or a specialty latte, our baristas are trained to craft each drink with precision and care.
        </div>
        <div className="card-span">
          <span className='icon'><BiCoffee/></span>
        </div>
      </div>
    </div>
  )
}

export default FirstCard