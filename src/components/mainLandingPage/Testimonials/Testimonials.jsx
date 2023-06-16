import React from 'react'
import "./Testimonials.css"
import firstTestimonials from "../../../assets/third.jpg";


const Testimonials = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="headline">What they say <span className='colored underlined'>about us?</span></h2>
        <div className="testimonials-container">
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="man with beautiful hat"/><span className="text">I really love this coffee!</span>
          </div>
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="woman with the glasses on"/><span className="text">This coffee shop is great!</span>
          </div>
      
          <div className="profile">
            <img src={firstTestimonials} alt="woman with blonde hair"/><span className="text">The coffee menu is just amazing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials