import React from 'react'
import '../../Styles/pages/carrers/CarrersRow_2.css'
import careers_01 from '../../../assets/organisms/carrers/carrersRow_2/careers-01.png'

const CarrersRow_2 = () => {
  return (
    <div className='ca-row-2'>
      <div className='ca-row-2-container'>
        <div className='ca-row-2-content'>
          <div className='ca-row-2-content-text'>
            <h2>Work Remotely</h2>
            <p>Develop your projects from anywhere in the world.
              Ensure flexibility, convenience and better quality
              of life, in addition to reducing transport and food
              expenses. At Truelogic you always work with great clients.</p>
          </div>
          <div className='ca-row-2-img'><img src={careers_01} alt="careers_01" /></div>
        </div>
      </div>
    </div>
  )
}

export default CarrersRow_2
