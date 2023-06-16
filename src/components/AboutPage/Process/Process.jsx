import React from 'react'
import "./Process.css"
import {Link} from "react-router-dom"

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="process-wrapper">
          <div className="process-headline">
            <h1 className='headline-process'>Process of our coffee production</h1>
            <p className='process-desc'>The process of coffee production can be broken down into several key stages, from growing the coffee plants to serving the final cup of coffee.</p>
          </div>
          <Link className='order-btn__link' to="/Contact"><button className='order-btn'>Contact Us</button></Link>
        </div>

      </div>
    </section>
  )
}

export default Process