import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/molecules/footer/NavBarColumn.css'

const NavBarColumn = () => {
    return (
        <div>
            <div className='nav-bar-column'>
                <div className='nav-bar-column-container'>
                    <h1 className='title-menu'>SITEMAP</h1>
                    <ul className='menu-footer'>
                        <li className='menu-item'><NavLink to="/company" className="nav-link">Company</NavLink></li>
                        <li className='menu-item'><NavLink to="/services" className="nav-link">Services</NavLink></li>
                        <li className='menu-item'><NavLink to="/theproof" className="nav-link">The Proof</NavLink></li>
                        <li className='menu-item'><NavLink to="/careers" className="nav-link">Careers</NavLink></li>

                        <li className='menu-item'><NavLink to="/getanestimate" className="nav-link">Get an Estimate</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBarColumn
