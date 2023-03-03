import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/molecules/header/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='content-navbar'>
            <ul className='text-navbar'>
              <li><NavLink to="/company" className="navbar-link">COMPANY</NavLink></li>
              <li><NavLink to="/services" className="navbar-link">SERVICES</NavLink></li>
              <li><NavLink to="/theProof" className="navbar-link">THE PROOF</NavLink></li>
              <li><NavLink to="/careers" className="navbar-link">CAREERS</NavLink></li>
              <li><NavLink to="/blog" className="navbar-link">BLOG</NavLink></li>
              <li className='item1'><NavLink to="/getAnEstimate" className="border-solid">GET AN ESTIMATE</NavLink></li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar
