
import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>

      <a href="#" class='logo'>Dzuwagleam</a>


     <nav class='navbar'>
     <a href="#" >Home</a>
     <a href="#" >About</a>
     <a href="#" >Services</a>
     <a href="#" >Testmonials</a>
     <a href="#">Contact Us</a>

     </nav>

      <div id="menu-btn" class="fas fa-bars"></div>
    </div>
  )
}

export default Header