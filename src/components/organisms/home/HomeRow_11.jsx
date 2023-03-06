import '../../Styles/pages/home/home/HomeRow_11.css';

import bs11a1 from '../../../assets/organisms/home/homeRow_11/BS11a1.png'
import bs11a2 from '../../../assets/organisms/home/homeRow_11/BS11a2.png'
import bs11a3 from '../../../assets/organisms/home/homeRow_11/BS11a3.png'

const HomeRow_11 = () => {
    return (
        <div className='row-11'>
            <div className='row-11-content'>
                <div className='row-11-title-content'><h3 className='row-11-title-section'>WHAT'S HAPPENING AT TRUELOGIC</h3></div>
                <div className='row-11-column'>
                    <div className='row-11-img-section'>
                        <a><span className='row-11-column-title'>How To Optimize Your Software Development Team in 2022</span></a>
                        <div className='text-description'>
                            <p>Managing a software development team is no easy task. You have
                                to keep your software engineers motivated and foster a...</p>
                            <a>READ MORE</a></div>
                        <div className='row-11-img-content'><img className='img-item' src={bs11a1} /></div>
                    </div>
                    <a><span className='row-11-column-title'>Picking Your Own Path: Selecting The Right Technology Stack</span></a>
                    <div className='text-description'>
                        <p>In some cases, selecting the technology is just a matter of
                            heritage or of what devs are used to. Some other times, our...</p>
                        <a>READ MORE</a>
                    </div>
                    <div className='row-11-img-content'>
                        <img className='img-item' src={bs11a2} />
                    </div>
                    <h1 className='row-11-column-title'>Machine Learning: Enhance your Company's Apps</h1>
                    <div className='text-description'>
                        <p>Machine learning and AI are quickly becoming essential tools
                            for optimizing and automating business processes that...</p>
                        <a>READ MORE</a>
                    </div>
                    <div className='row-11-img-content'>
                        <img className='img-item' src={bs11a3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRow_11;