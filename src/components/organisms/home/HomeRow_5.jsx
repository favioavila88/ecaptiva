import '../../Styles/organisms/home/HomeRow_5.css';

const HomeRow_5 = () => {
    return (
        <section className='row-5'>
            <div className='row-5-container'>
                <div className="row-5-title-text"><h3 className="row-5-title">WHAT OUR CLIENTS SAY</h3></div>
                <div className='slide'>
                    <input type='radio' name='radio-btn' id='radio1' />
                    <input type='radio' name='radio-btn' id='radio2' />
                    <input type='radio' name='radio-btn' id='radio3' />
                    <div className='st first'>
                        <div className='row-5-paragraph'>
                            <h3 className='row-5-text-paragraph'>Captiva team has always a nice attitude, they are very well trained and are always
                                looking for the best possible solution at their reach, making for us very good quality
                                websites and applications</h3>
                            <p>Daniel Tenzi / NLX IT Director - <span className='row-5-link'>www.history.com</span></p>
                        </div>
                    </div>
                    <div className='st'>
                        <div className='row-5-paragraph'>
                            <h3 className='row-5-text-paragraph'>Captiva is exceptional to work with. They are quick on development, highly responsive
                                to problems, and very collaborative in helping us define needs. I highly recommend them!</h3>
                            <p className='row-5-name-grade'>Andrew Hall / Systems Product Manager -  <span className='row-5-link'>lds.org</span></p>
                        </div>
                    </div>
                    <div className='st'>
                        <div className='row-5-paragraph'>
                            <h3 className='row-5-text-paragraph'>They've been really good to work with, and they have exceeded expectations all along</h3>
                            <p>Charlie Moore / CEO, MuniAxis - <span className='row-5-link'>www.muniaxis.com</span></p>
                        </div>
                    </div>
                </div>
                <div className='nav-m'>
                    <label htmlFor='radio1' className='m-btn'></label>
                    <label htmlFor='radio2' className='m-btn'></label>
                    <label htmlFor='radio3' className='m-btn'></label>
                </div>
            </div>
        </section>
    )
}

export default HomeRow_5;
