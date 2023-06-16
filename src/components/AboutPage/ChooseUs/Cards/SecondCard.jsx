import React,{useEffect} from 'react'
import {FaHandshake} from "react-icons/fa"
import "animate.css";
import WOW from "wowjs"

const FirstCard = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
    return (
      <div className="wow card animate__animated animate__bounceInRight animate__duration-2s animate__delay-1s">
        <div className="card-wrapper">
          <div className="card-headline">
            <h3>Our great customer service</h3>
          </div>
          <div className="card-desc">
              We also pride ourselves on providing great service to our customers. Our friendly and knowledgeable staff are always happy to answer questions, make recommendations, and ensure that every customer leaves satisfied. Whether you're a regular or a first-time visitor, we strive to make every visit to our coffee shop a memorable one.
          </div>
          <div className="card-span">
            <span className='icon'><FaHandshake/></span>
          </div>
        </div>
      </div>
    )
    
}

export default FirstCard