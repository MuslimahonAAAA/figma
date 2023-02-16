import React from "react";
import "./Sectionone.css";
import award from "../../images/award.png";
import com from "../../images/com.png";
import by from "../../images/by.png";
import half from "../../images/half.png";











function Sectionone() {
  return (
    <div className="sectionone">
      <div className="one">
        <div className="award">
          <img src={award} alt="" />
          <p>2021 Award Winner: Best Gym-Bag Shampoo</p>
        </div>
        <div className="com">
          <img src={com} alt="" />
          <p>World-Changing Idea 2022 "On the Rise"</p>
        </div>
        <div className="by">
          <img src={by} alt="" />
          <p>"The Zero-Waste Brand Making Waterless Haircare a Thing."</p>
        </div>
        <img src="" alt="" />
        <div className="half">
          <img src={half} alt="" />
          <p>2021 Award-Winner: Best Conscious Haircare Buys</p>
        </div>
      </div>

      
     
      
    </div>
  );
}

export default Sectionone;
