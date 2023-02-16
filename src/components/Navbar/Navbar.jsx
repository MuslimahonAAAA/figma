import React from 'react'
import "./Navbar.css"

import logo from "../../images/logo.png"
import bas from "../../images/bas.png"
import user from "../../images/user.png"

function Navbar() {
  return (
<nav>
<img className='logo' src={logo} alt="" />
<div className="links">
    <p>SHOP</p>
    <p>LEARN</p>
    <p>SUSTAINABILITY</p>
    <p>OUR STORY</p>
    <p>PRESS</p>
    <p>QUIZ</p>
</div>
<div className="icons">
    <img src={user} alt="" />
    <img src={bas} alt="" />
   

</div>
</nav>
  )
}

export default Navbar