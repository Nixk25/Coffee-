import React from 'react'
import "./Newsletter.css"


const Newsletter = () => {

  function disappearFunction(event){
    event.preventDefault()
    document.getElementById("new-element").style.display="block";
    document.getElementById("bg-image__newsletter").style.opacity="0";
    
  }
  return (
    <section className='newsletter'>
      <div className="container">
        <div id="bg-image__newsletter">
            <div id="newsletter-wrapper">
                <div className="newsletter-text">Subscribe to get <span className='colored'>50%</span> discount price</div>
                <form onSubmit={disappearFunction} className="input-wrapper">
                  <input className='newsletter-input' required type="email" id='email' placeholder='Email Address'/>
                  <input type="submit" className='newsletter-btn' value="Order Now"  />
                </form>
          </div>
        </div>
          <div id="new-element">
            <p>Thanks for subscription! 😁</p>
          </div>
      </div>
    </section>
  )
}

export default Newsletter