import React from "react";
import "./Sectiontwo.css"
import s from "../../images/s.png";
import info from "../../images/Range.png";
function Sectiontwo() {
  return (
    <div className="sectiontwo">
      <div className="sa">
        <img src={s} alt="dfghjkl" />
      </div>

      <h1>
        "I wasn’t prepared for how much healthier my hair is. I get compliments
        all of the time now."
      </h1>
      <p className="s">- Maria</p>
      <div className="info">
        <img src={info} alt="" />
      </div>
    </div>
  );
}

export default Sectiontwo;
