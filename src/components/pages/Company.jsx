import React from 'react'
import CompanyRow_1 from '../organisms/company/CompanyRow_1'
import CompanyRow_2 from '../organisms/company/CompanyRow_2'
import HomeRow_4 from '../organisms/home/HomeRow_4'
import CompanyRow_4 from '../organisms/company/CompanyRow_4'
import CompanyRow_5 from '../organisms/company/CompanyRow_5'
import CompanyRow_6 from '../organisms/company/CompanyRow_6'
import CompanyRow_7 from '../organisms/company/CompanyRow_7'

const Company = () => {
  return (
    <div>
      <div className='company'>
        <div className='company-container'>
          <CompanyRow_1 />
          <CompanyRow_2 />
          <HomeRow_4 />
          <CompanyRow_4/>
          <CompanyRow_5 />
          <CompanyRow_6 />
          <CompanyRow_7 />

        </div>
      </div>
      
    </div>
  )
}

export default Company
