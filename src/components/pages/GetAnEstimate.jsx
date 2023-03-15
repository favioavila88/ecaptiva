import React from 'react'
import GetAnEstimateRow_2 from '../organisms/getAnEstimate/GetAnEstimateRow_2'
import ContactUsRow_3 from '../organisms/contactUs/ContactUsRow_3'
import ContactUsRow_1 from '../organisms/contactUs/ContactUsRow_1'


const GetAnEstimate = () => {
  return (
    <div>
      <div className='getAndEstimate'>
        <div className='getAndEstimate-content'>
          <ContactUsRow_1 />
          <GetAnEstimateRow_2 />
          <ContactUsRow_3 />

        </div>
      </div>
      
    </div>
  )
}

export default GetAnEstimate
