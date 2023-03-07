import React from 'react'

import './Cp_row_2.css'

import qaLeft from '../../assets/imags/home/row-5/quotation-left-1.png'
import qaRight from '../../assets/imags/home/row-5/quotation-right-1.png'
import marcelo_tribuj from '../../assets/imags/company/comp-row-2/marcelo-tribuj.png'

const CompanyRow_2 = () => {
  return (
    <div className='cp-row-2'>
      <div className='cp-row-2-container'>
        <div className='cp-row-2-content-left'>
          <img src={qaLeft} alt="qaLeft" className='qaLeft' />
          <h3>Through high-end processes and engineers, we provide the service and
            transparency our clients need.</h3>
          <h4 className='name-ceo'>Christian Alvaro Avila Perez –</h4>
          <h4 className='post'> CEO</h4>
          <img src={qaRight} alt="qaRight" className='qaRight' />
        </div>
        <div className='cp-row-2-content-right'>
          <img src={marcelo_tribuj} alt="marcelo_tribuj" className='photography-ceo' />
        </div>
      </div>
    </div>
  )
}

export default CompanyRow_2
