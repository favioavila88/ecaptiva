import '../../Styles/pages/home/HomeRow_3.css';
import fastforward from '../../../assets/organisms/home/homeRow_3/fast-forward.png';

const HomeRow_3 = () => {
    return (
        
        <div className='row-3'>
            <div className="row-3-container">
                <div className="row-3-container-img">
                    <img className="row-3-img" src={fastforward} />
                </div>
                <div className="row-3-text-container">
                    <p>Surpass geographical boundaries and connect with 
                        exceptionally proficient software engineers in 
                        Latin America. These professionals come with more than 
                        5 years of expertise and are fluent in English. We provide 
                        a reliable and effective option, operating within our clients' time zone.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeRow_3;