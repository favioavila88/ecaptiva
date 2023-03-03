import React from 'react'
import Logo from '../molecules/header/Logo'
import Navbar from '../molecules/header/Navbar'
import '../Styles/organisms/Header.css'

const Header = () => {
  return (
    <div className='flex flex-col'>
      <div className='header w-full m-auto flex items-center lg:max-w-200'>
        <Logo />
        <Navbar />
      </div>
    </div>
  )
}

export default Header
