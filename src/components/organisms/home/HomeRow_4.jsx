import '../../Styles/pages/home/HomeRow_4.css';

import television_academy from '../../../assets/organisms/home/homeRow_4/television-academy.png';
import evernote from '../../../assets/organisms/home/homeRow_4/evernote.png';
import bny_mellon from '../../../assets/organisms/home/homeRow_4/bny-mellon.png';
import sony_pictures from '../../../assets/organisms/home/homeRow_4/sony-pictures.png';
import history_channel from '../../../assets/organisms/home/homeRow_4/history-channel.png';
import nissan from '../../../assets/organisms/home/homeRow_4/nissan.png';
import vts from '../../../assets/organisms/home/homeRow_4/vts.png';
import spredfast from '../../../assets/organisms/home/homeRow_4/spredfast.png';
import elementum from '../../../assets/organisms/home/homeRow_4/elementum.png';
import visa from '../../../assets/organisms/home/homeRow_4/visa.png';


const HomeRow_4 = () => {
    return (
        <div className='slideInUp'>
            <div className='row-4'>
                <div className="row-4-container">
                    <div className="row-4-title-text"><h3 className="row-4-title">BRANDS THAT TRUST US</h3></div>
                    <div className="row-4-images-container">
                        <a><img className="row-4-img-1" src={television_academy} /></a>
                        <img className="row-4-img-2" src={evernote} />
                        <img className="row-4-img-3" src={bny_mellon} />
                        <img className="row-4-img-4" src={sony_pictures} />
                        <img className="row-4-img-5" src={history_channel} />
                        <img className="row-4-img-6" src={nissan} />
                        <img className="row-4-img-7" src={vts} />
                        <img className="row-4-img-8" src={spredfast} />
                        <img className="row-4-img-9" src={elementum} />
                        <img className="row-4-img-10" src={visa} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRow_4;