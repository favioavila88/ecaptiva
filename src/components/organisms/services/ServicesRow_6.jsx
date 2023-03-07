import React from 'react'

import '../../Styles/pages/services/ServicesRow_6.css'
import model_01 from '../../../assets/organisms/services/servicesRow_6/unique-model-01.png'

const ServicesRow_6 = () => {
    return (
        <div>
            <div className='s-row-6'>
                <div className='s-row-6-container'>
                    <div className='s-row-6-img-content'>
                        <img src={model_01} alt="model_01" className='s-row-6-img' />
                    </div>
                    <div className='s-row-6-text-content'>
                        <h2>Agile: Collaborative development</h2>
                        <p>Collaborative growth and functionality are leading the way in technological
                            development, with agile methodology as a key player. The iterative development
                            approach will give your company the edge in innovation - let us guide you through it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesRow_6

