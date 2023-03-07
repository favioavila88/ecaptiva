import React from 'react'
import company2 from '../../../assets/organisms/company/companyRow_5/company-02-1.png'
import '../../Styles/pages/company/CompanyRow_5.css'

const CompanyRow_5 = () => {
    return (
        <div className='cp=row-5'>
        <div className='cp-row-5-container'>
            <div className='cp-row-5-img-content'>
                <img src={company2} alt="company2" className='cp-row-5-img' />
            </div>
            <div className='cp-row-5-text-content'>
                <h2>How we work</h2>
                <p>At Captiva, we're a collective of like-minded techies who love taking on projects
                    together that go beyond the workspace. We believe that true innovation is born out
                    of true collaboration which is how we find new and innovative solutions for our
                    clients.</p>
            </div>
        </div>
    </div>
    )
}

export default CompanyRow_5
