import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
      <div className='nav'>
        <div className='nav-logo'>EV-olution</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li className="nav-contact">Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar
