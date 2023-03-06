import React from 'react'
import { NavLink } from 'react-router-dom'
import logoCaptivaHeader1 from '../../../assets/header/LogoCaptivaHeader1.png'
import '../../Styles/molecules/header/Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
        <NavLink to="/" ><img className='logo-header' src={logoCaptivaHeader1} alt='Logo Captiva 1'/></NavLink>      
    </div>
  )
}

export default Logo
