import React from 'react';
import IconColumn from '../../molecules/footer/IconColumn' 
import LogosWorkColumn from '../../molecules/footer/LogosWorkColumn' 
import NavBarColumn from '../../molecules/footer/NavBarColumn' 
import ReferenceDateColumn from '../../molecules/footer/ReferenceDateColumn' 
import '../../Styles/organisms/footer/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
               <IconColumn />
               <NavBarColumn />
               <LogosWorkColumn />
               <ReferenceDateColumn />
            </div>
        </div>
    )
}

export default Footer;