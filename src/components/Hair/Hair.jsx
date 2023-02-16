import React from 'react'
import "./Hair.css"
import br from "../../images/br.png";
import bl from "../../images/bl.png";
import ye from "../../images/ye.png";
import dot from "../../images/dot.png";

function Hair() {
  return (
    <div>


<div className="type">
        <img src={br} alt="" />
        <img src={bl} alt="" />
        <img src={ye} alt="" />
      </div>
      <div className="dot">
        <img src={dot} alt="" />
      </div>


    </div>
  )
}

export default Hair