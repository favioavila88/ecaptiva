import React from 'react'
import logofooter from '../../../assets/footer/logo-footer.png'
import '../../Styles/molecules/footer/IconColumn.css'

const IconColumn = () => {
  return (
    <div>
        <div className='icon-column'>
          <div className='icon-column-contain'>
          <div className='imagen-logo-footer'><img src={logofooter} className='logo-footer' /></div>
          <div className='name-logo-footer'>Captiva Software, LLC</div>
          <div className='contry-logo-footer'>Cochabamba, Bolivia</div>
          </div>
        </div>      
    </div>
  )
}

export default IconColumn