import React from 'react'
import '../../Styles/pages/company/CompanyRow_4.css'
import company from '../../../assets/organisms/company/companyRow_4/company-01.png'

const CompanyRow_4 = () => {
  return (
    <div className='cp=row-4'>
    <div className='cp-row-4-container'>
        <div className='cp-row-4-text-content'>
            <h2>Truelogic's true story</h2>
            <h3>WHO WE ARE</h3>
            <p>Who's behind Truelogic? The world's leading tech professionals.
                But for us going to work doesn't mean disappearing into separate
                cubicles. We may show up in jeans, but we work as a team - a team
                that comes up with tangible solutions for you, our client.</p>
        </div>
        <div className='cp-row-4-img-content'>
            <img src={company} alt="company" className='cp-row-4-img' />
        </div>
    </div>
</div>
  )
}

export default CompanyRow_4
