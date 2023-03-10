import React from 'react'
import '../../Styles/pages/carrers/CarrersRow_3.css'
import careers_02 from '../../../assets/organisms/carrers/carrersRow_3/careers-02.png'

const CarrersRow_3 = () => {
  return (
    <div className='ca-row-3'>
    <div className='ca-row-3-container'>
        <div className='ca-row-3-content'>
            <div className='ca-row-3-img'><img src={careers_02} alt="careers_02" /></div>
            <div className='ca-row-3-content-text'>
                <h2>Be part of a community</h2>
                <p>Even remotely, we are a great team. We develop
                    applications, exchange knowledge and, in this
                    way, we are able to evolve together.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default CarrersRow_3
