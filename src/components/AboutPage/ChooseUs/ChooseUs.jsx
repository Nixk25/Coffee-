import React from 'react'
import "./ChooseUs.css"
import cards from "./cards-texts"
import CardItem from './CardItem'


const ChooseUs = () => {
  return (
    <section className="chooseUs">
      <div className="container">
        <div className="headline-wrapper">
          <div className="headline-chooseUs">
            <h1>Why choose us?</h1>
          </div>
          <div className="desc-chooseUs">
            <p>Why we are thinking that we are <span className="colored underlined">better than the others?</span></p>
          </div>
        </div>
        <section className="card-section">
          {cards.map((cardText)=>{
            const {id} = cardText
            return(
              <CardItem key={id} texts={cardText}/>
            )
          })}
        </section>
      </div>
    </section>
  )
}

export default ChooseUs