import '../../Styles/pages/home/HomeRow_8.css';

import usa from '../../../assets/organisms/home/homeRow_8/usa-turq.png'
import chat from '../../../assets/organisms/home/homeRow_8/chat-turq.png'
import team from '../../../assets/organisms/home/homeRow_8/team-turq.png'
import recruiting from '../../../assets/organisms/home/homeRow_8/recruiting-turq.png'
import timezone from '../../../assets/organisms/home/homeRow_8/timezone-turq.png'


const HomeRow_8 = () => {
    return (
        <div className='row-8'>
            <div className='row-8-conatiner' >
                <h3 className='row-8-title'>OUR DIFFERENTIATORS</h3>
                <div className="row-8-column">
                    <div className="row-8-item">
                        <img src={usa} className='row-8-imag-1' />
                        <h1 className='row-8-colum-title'>Global</h1>
                        <p className='row-8-colum-paragraph'>Our company serves on a global scale, operating in over 25 different countries.</p>
                    </div>
                    <div className="row-8-item"><img src={chat} className='row-8-imag-2' />
                        <h1 className='row-8-colum-title'>Different industries</h1>
                        <p className='row-8-colum-paragraph'>Our professionals have knowledge and experience in several areas of the industry.</p>
                    </div>
                    <div className="row-8-item"><img src={team} className='row-8-imag-3' />
                        <h1 className='row-8-colum-title'>Best talents</h1>
                        <p className='row-8-colum-paragraph'>Truelogic is in a constant search for the best professionals available in the market.</p>
                    </div>
                    <div className="row-8-item"><img src={recruiting} className='row-8-imag-4' />
                        <h1 className='row-8-colum-title'>Remote first</h1>
                        <p className='row-8-colum-paragraph'>At Truelogic, we give preference to tasks carried out remotely, which guarantees a better
                            quality of life for our employees.</p>
                    </div>
                    <div className="row-8-item"><img src={timezone} className='row-8-imag-5' />
                        <h1 className='row-8-colum-title'>Worldwide projects</h1>
                        <p className='row-8-colum-paragraph'>Here we carry out grandiose worldwide projects, which count on the work of development
                            professionals spread all over the planet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRow_8;