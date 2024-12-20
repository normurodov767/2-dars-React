import React from 'react'
import "./style.css"
import rasm from'../../assets/Frame 4.png'
import rasm1 from'../../assets/Frame 5.png'



function Navbar() {
  return (
    <>
      <nav>

<img src={rasm} alt="" />
<input type="text" placeholder="search" />
<img className='rasm1' src={rasm1} alt="" />


      </nav>
    </>
  )
}

export default Navbar





