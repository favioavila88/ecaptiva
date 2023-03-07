import React from 'react'
import value01 from '../../assets/imags/company/comp-row-7/value-01.png'
import value02 from '../../assets/imags/company/comp-row-7/value-02.png'
import value03 from '../../assets/imags/company/comp-row-7/value-03.png'
import value04 from '../../assets/imags/company/comp-row-7/value-04.png'
import value05 from '../../assets/imags/company/comp-row-7/value-05.png'
import './Cp_row_7.css'

const CompanyRow_7 = () => {
  return (
    <div className='cp-row-7'>
    <div className='cp-row-7-container'>
        <div className='cp-row-7-title'>
            <h3>OUR VALUES</h3>
            <div className='cp-row-7-line'></div>
        </div>
        <div className='cp-row-7-content'>
            <div className='cp-row-7-colum'>
                <img src={value01} alt="value01" />
                <h3 className='cp-row-7-title-column-1'>WE ARE ONE WITH OUR CLIENTS</h3>
                <p>We are a team because we respect, trust and care for each
                    other. Being motivated internally, we enjoy teaming up
                    with our clients to get valuable software.</p>
            </div>
            <div className='cp-row-7-colum'>
                <img src={value02} alt="value02" />
                <h3 className='cp-row-7-title-column-2'>KICKSTARTING INNOVATION TOGETHER</h3>
                <p>Our teamwork puts innovation in motion through motivation and inspiration.
                    We have an entrepreneurial mindset that allows everyone to be two
                    steps ahead.</p>
            </div>
            <div className='cp-row-7-colum'>
                <img src={value03} alt="value03" />
                <h3 className='cp-row-7-title-column-3'>WORK HARD, PLAY EVEN HARDER</h3>
                <p>We are a diverse and collaborative techie wolf-pack that feels pride and
                    passion about what we do. Because we invest in having fun, we go by the
                    motto “work hard, play even harder”</p>
            </div>
            <div className='cp-row-7-colum'>
                <img src={value04} alt="value04" />
                <h3 className='cp-row-7-title-column-4'>WE DON'T SETTLE FOR GOOD, WE DELIVER GREAT</h3>
                <p>We pride ourselves on achieving high quality products and services through
                    a commitment to innovation, ongoing learning, teamwork and continuous
                    improvement</p>
            </div>
            <div className='cp-row-7-colum'>
                <img src={value05} alt="value05" />
                <h3 className='cp-row-7-title-column-5'>WE CARE</h3>
                <p>We challenge ourselves at work everyday to reach our goals while
                    contributing to our community needs in the best possible way.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default CompanyRow_7
