import React from 'react'
import ServicesRow_1 from '../organisms/services/ServicesRow_1'
import ServicesRow_2 from '../organisms/services/ServicesRow_2'
import ServicesRow_3 from '../organisms/services/ServicesRow_3'
import ServicesRow_4 from '../organisms/services/ServicesRow_4'
import ServicesRow_5 from '../organisms/services/ServicesRow_5'
import ServicesRow_6 from '../organisms/services/ServicesRow_6'

const Services = () => {
  return (
    <div>
      <div className='services'>
        <div className='seervices-container'>
          <ServicesRow_1 />
          <ServicesRow_2 />
          <ServicesRow_3 />
          <ServicesRow_4 />
          <ServicesRow_5 />
          <ServicesRow_6 />
        </div>
      </div>
      
    </div>
  )
}

export default Services
