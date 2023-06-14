import React from 'react'
import "./CardItem.css"

const CardItem = ({texts}) => {
  const {headline,desc} = texts
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-headline">
          <h3>{headline}</h3>
        </div>
        <div className="card-desc">
          {desc}
        </div>
        <div className="card-span">
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default CardItem