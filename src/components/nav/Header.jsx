
import React from 'react'
import './header.css'
import { AiOutlineAlignLeft } from "react-icons/ai";

function Header() {
  return (
    <div className='header'>

      <a href="#" class='logo'>Dzuwagleam</a>


     <nav className='navbar'>
     <a href="#" >Home</a>
     <a href="#" >About</a>
     <a href="#" >Services</a>
     <a href="#" >Testmonials</a>
     <a href="#">Contact Us</a>

     </nav>
     <AiOutlineAlignLeft />

      
    </div>
  )
}

export default Header