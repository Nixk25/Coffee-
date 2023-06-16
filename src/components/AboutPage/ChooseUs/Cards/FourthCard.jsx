import React, { useEffect } from 'react'
import {FaSmileBeam} from "react-icons/fa"
import WOW from "wowjs";
import "animate.css"



const FirstCard = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div className="card animate__animated animate__bounceInRight animate-duration-2s wow animate__delay-1s">
      <div className="card-wrapper">
        <div className="card-headline">
          <h3>Friendly atmosphere</h3>
        </div>
        <div className="card-desc">
            But it's not just about the coffee - we also offer a great atmosphere for our customers to enjoy. Our cozy seating areas, warm lighting, and inviting decor create a welcoming and relaxing environment that's perfect for catching up with friends, studying, or simply taking a break from the hustle and bustle of daily life.
        </div>
        <div className="card-span">
          <span className='icon'><FaSmileBeam/></span>
        </div>
      </div>
    </div>
  )
}

export default FirstCard