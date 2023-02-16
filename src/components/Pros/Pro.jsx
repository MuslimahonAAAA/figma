import React from 'react'
import "./Pro.css"
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
function Pro() {
  return (
    <div className="hair">
        <div className="h">
          <img src={one} alt="" />
          <p>
            There's a reason people say it's the best shampoo they've ever used.
          </p>
        </div>
        <div className="h">
          <img src={two} alt="" />
          <p>
            Ingredients matter. Here's what you will (and won't) find in Everist
            products.
          </p>
        </div>
        <div className="h">
          <img src={three} alt="" />
          <p>
            We make choices with the planet in mind. Here's how we've approached
            it.
          </p>
        </div>
      </div>
  )
}

export default Pro