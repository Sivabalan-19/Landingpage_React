import React from 'react'
import './Inp.css'
import { RiH1 } from 'react-icons/ri'

 function Inp() {
  return (
  
      <div className='in'>
        <h1>BOOK NOW</h1>
        <div class="inpu">
        <div class="inp1">
            <div><input type="text" placeholder='FROM'></input></div>
            <div><input type="date"></input></div>
            <div><input type="time"></input></div>
        </div>
        <div class="inp2">
            <div><input type="text" placeholder='TO'></input></div>
            <div><input type="date"></input></div>
            <div><input type="time"></input></div>
        </div>
        </div>
        <div><button className='apply'>APPLY NOW </button></div>
      </div>
    
  )
}

export default Inp
