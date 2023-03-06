import React from 'react'
import Logo from '../molecules/header/Logo'
import Navbar from '../molecules/header/Navbar'
import '../Styles/organisms/Header.css'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='contain-header'>
          <Logo />
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Header
