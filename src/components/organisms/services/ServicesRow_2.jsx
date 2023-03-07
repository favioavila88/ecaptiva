import React from 'react'

import team1 from '../../../assets/organisms/services/servicesRow_2/team-1.png'
import agile_team from '../../../assets/organisms/services/servicesRow_2/agile-team.png'
import box_close from '../../../assets/organisms/services/servicesRow_2/box-close.png'

import '../../Styles/pages/services/ServicesRow_2.css'

const ServicesRow_2 = () => {
  return (
    <div>
          <div className='s-row-2'>
        <div className='s-row-2-container'>
            <div className='s-row-2-title'>
                <h3>BUSINESS MODELS</h3>
                <div className='s-row-2-line'></div>
            </div>
            <div className='s-row-2-content'>
                <div className='s-row-2-item'>
                    <img src={team1} alt="team1" />
                    <h3>Staff Augmentation</h3>
                    <h5>HIRE TOP TALENT ON DEMAND</h5>
                    <p>With access to our elite candidates, you can fast-track 
                        your way to a great team. Our applicants can start working 
                        remotely for you in just two to four weeks and are ready 
                        to be interviewed whenever you say the word.</p>
                </div>
                <div className='s-row-2-item'>
                    <img src={agile_team} alt="agile_team" />
                    <h3>Dedicated Agile Teams</h3>
                    <h5>TOP-NOTCH TEAM LEADERSHIP</h5>
                    <p>Your projects will be overseen by our specialist Software 
                        Architects and Scrum Masters trained in Agile Scrum methodology, 
                        giving you only the best and latest in information technology.</p>
                </div>
                <div className='s-row-2-item'>
                    <img src={box_close} alt="box_close" />
                    <h3>Innovation Projects</h3>
                    <h5>KNOW EXACTLY WHAT YOU NEED? LET'S MAKE IT HAPPEN</h5>
                    <p>Our innovation program zeroes in on small-scale projects, 
                        bringing them to completion within a set timeframe and budget. 
                        Our approach is clear, efficient, and effective.</p>
                </div>
            </div>
        </div>      
    </div>
    </div>
  )
}

export default ServicesRow_2
