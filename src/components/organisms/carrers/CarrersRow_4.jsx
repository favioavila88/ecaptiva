import React from 'react'
import '../../Styles/pages/carrers/CarrersRow_4.css'
import careers_03 from '../../../assets/organisms/carrers/carrersRow_4/careers-03.png'

const CarrersRow_4 = () => {
    return (
        <div className='ca-row-4'>
            <div className='ca-row-4-container'>
                <div className='ca-row-4-content'>
                    <div className='ca-row-4-content-text'>
                        <h2>Work from anywhere</h2>
                        <p>Freedom is one of the highlights of working at
                            Truelogic. Here you have an advantageous benefits
                            package, receive your payment in dollars, have
                            PTO - Paid Time Off and can manage your day to day
                            the way you want.</p>
                    </div>
                    <div className='ca-row-4-img'><img src={careers_03} alt="careers_03" /></div>
                </div>
            </div>
        </div>
    )

}

export default CarrersRow_4
