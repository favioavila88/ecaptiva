import React from 'react'
import CarrersRow_1 from '../organisms/carrers/CarrersRow_1'
import CarrersRow_2 from '../organisms/carrers/CarrersRow_2'
import CarrersRow_3 from '../organisms/carrers/CarrersRow_3'
import CarrersRow_4 from '../organisms/carrers/CarrersRow_4'
import CarrersRow_5 from '../organisms/carrers/CarrersRow_5'
import CarrersRow_6 from '../organisms/carrers/CarrersRow_6'

const Careers = () => {
  return (
    <div>
      <div className='carrers'>
        <div className='carrers-ccontainer'>
          <CarrersRow_1 />
          <CarrersRow_2 />
          <CarrersRow_3 />
          <CarrersRow_4 />
          <CarrersRow_5 />
          <CarrersRow_6 />
        </div>
      </div>
      
    </div>
  )
}

export default Careers
