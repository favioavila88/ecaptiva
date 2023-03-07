import React from 'react';
import '../../Styles/organisms/footer/Footer.css'


import logofooter from '../../../assets/footer/logo-footer.png'
import microsoftParnert from '../../../assets/footer/microsoft_parnert-removebg-preview.png'
import crownpeakPartners from '../../../assets/footer/crownpeak_partners-removebg-preview.png'
import huffpostInc from '../../../assets/footer/huffpost_inc-removebg-preview.png'
import AdobePartner from '../../../assets/footer/Adobe_soltion_partner-removebg-preview.png'

import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
                {/*Columna1*/}
                <div className='column-footer-1'>
                    <div className='column-logo'>
                        <div className='imagen-logo-under'><img src={logofooter} className='logo-footer' /></div>
                        <div className='text-logo-under'>Captiva Software, LLC</div>
                    </div>
                </div>
                {/*Columna2*/}
                <div className='column-footer-2'>
                    <div className='navegation-page'>
                        <h1 className='title-menu'>SITEMAP</h1>
                        <ul className='menu-footer'>
                            <li className='menu-item'><NavLink to="/company" className="nav-link active">Company</NavLink></li>
                            <li className='menu-item'><NavLink to="/services" className="nav-link active">Services</NavLink></li>
                            <li className='menu-item'><NavLink to="/theproof" className="nav-link active">The Proof</NavLink></li>
                            <li className='menu-item'><NavLink to="/careers" className="nav-link active">Careers</NavLink></li>
                            <li className='menu-item'><NavLink to="/blog" className="nav-link active">Blog</NavLink></li>
                            <li className='menu-item'><NavLink to="/getanestimate" className="nav-link active">Get an Estimate</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/*Columna3*/}
                <div className='column-footer-3'>
                    <div className='img-list-parne'>
                        <div className='parnet-img'><img className='img-1' src={microsoftParnert} /></div>
                        <div className='parnet-img'><img className='img-2' src={crownpeakPartners} /></div>
                        <div className='parnet-img'><img className='img-3' src={huffpostInc} /></div>
                        <div className='parnet-img'><img className='img-4' src={AdobePartner} /></div>
                    </div>
                </div>
                {/*Columna4*/}
                <div className='column-footer-4'>
                    <div className='info-company-footer'>
                        <div className='info-text'><h3 className='type-contact-text'>Let's build something great together</h3></div>
                        <div className='info-text'><a className='number-tel-text'>+591 70773018</a></div>
                        <div className='info-text'><h2 className='email-text'>hello@captiva.io</h2></div>
                        <div>
                            <ul className='social-red'>
                                <li className="fa fa-facebook fa-lg simple_social"></li>
                                <li className="fa fa-twitter grow"></li>
                                <li className="fa fa-google grow"></li>
                                <li className="fa fa-github grow"></li>
                                <li className="fa fa-codepen grow"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;