import React from 'react'
import './Head.css'

function Head() {
  return (
    <div>
       
      <header class="head">
        <div class="heading">TRAVELER</div>
        <div class="nav">
            <div className='navlist'>HOME</div>
            <div className='navlist'>ABOUT</div>
            <div className='navlist'>SERVICE</div>
            <div className='navlist'>PACKAGES</div>
            <div className='navlist'>CONTACT</div>
        </div>
        <div><button class="log">LOGIN</button></div>
    </header>
      
    </div>
  )
}


export default Head