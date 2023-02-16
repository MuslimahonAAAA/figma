import React from 'react'
import "./FlowerSection.css"
import flow from "../../images/flow.png";
import last from "../../images/last.png";
function FlowerSection() {
  return (
    <div>
        <div
        className="flows"
        style={{
          backgroundImage: `url(${flow})`,
          height: "657px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='f'>
        <p>Our VISION</p>
        <h5>Eco for Everyone</h5>
        <h2>
          We all want to live more sustainably. We're here to make it easier.
        </h2>
        <h3>
          We believe that big change happens when small changes become easy and
          better (in every way) than the status quo. Eco can be for everyone and
          we're here to prove it. Imperfect environmentalists welcome.
        </h3>
        <img src={last} alt="" />
      </div>

        </div>
    </div>
  )
}

export default FlowerSection