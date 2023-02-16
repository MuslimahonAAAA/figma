import React from 'react'
import "./CreamsReview.css"
import cream1 from "../../images/cream1.png";
import cream2 from "../../images/cream2.png";
import cream3 from "../../images/cream3.png";
function CreamsReview() {
  return (
    <div className="Creams">
    <div className="c">
      <img src={cream1} alt="" />
      <p>85 Reviews</p>
      <p>$24.00</p>
    </div>
    <div className="c">
      <img src={cream2} alt="" />
      <p>10 Reviews</p>
      <p>$24.00</p>
    </div>
    <div className="c">
      <img src={cream3} alt="" />
      <p>12 Review</p>
      <p>$46.00</p>
    </div>
  </div>
  )
}

export default CreamsReview