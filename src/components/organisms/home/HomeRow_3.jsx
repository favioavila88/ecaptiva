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
                    <p>Captiva leverages the latest in tech to maximize your
                        company's potential. We address especially fitted 
                        solutions with advanced technology and empower your 
                        company with dedicated teams of senior software engineers working
                        in your same timezone. We'll put your company on the cutting edge.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeRow_3;