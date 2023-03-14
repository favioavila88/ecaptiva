import React from 'react'
import microsoftParnert from '../../../assets/footer/microsoft_parnert-removebg-preview.png'
import crownpeakPartners from '../../../assets/footer/crownpeak_partners-removebg-preview.png'
import huffpostInc from '../../../assets/footer/huffpost_inc-removebg-preview.png'
import AdobePartner from '../../../assets/footer/Adobe_soltion_partner-removebg-preview.png'
import '../../Styles/molecules/footer/LogosWorkColumn.css'

const LogosWorkColumn = () => {
    return (
        <div>
            <div className='logos-column'>
                <div className='logos-column'>
                    <div className='parnet-img'><img className='img-1' src={microsoftParnert} /></div>
                    <div className='parnet-img'><img className='img-2' src={crownpeakPartners} /></div>
                    <div className='parnet-img'><img className='img-3' src={huffpostInc} /></div>
                    <div className='parnet-img'><img className='img-4' src={AdobePartner} /></div>
                </div>
            </div>

        </div>
    )
}

export default LogosWorkColumn
