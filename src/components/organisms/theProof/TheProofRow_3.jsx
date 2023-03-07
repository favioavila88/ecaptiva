import React, { useState } from 'react'
import '../../Styles/pages/theProof/TheProofRow_3.css';
import img1 from '../../../assets/organisms/theProof/01-emmys-2-500x360.jpg'
import img2 from '../../../assets/organisms/theProof/02-emmys-fyc-500x360.jpg'
import img3 from '../../../assets/organisms/theProof/03-hoopla-500x360.jpg'
import img4 from '../../../assets/organisms/theProof/04-muniaxis-1-500x360.jpg'
import img5 from '../../../assets/organisms/theProof/05-coldwell-banker-500x360.jpg'
import img6 from '../../../assets/organisms/theProof/06-endemol-500x360.jpg'
import img7 from '../../../assets/organisms/theProof/07-nascar-500x360.jpg'
import img8 from '../../../assets/organisms/theProof/08-agilent-tech-1-500x360.jpg'
import img9 from '../../../assets/organisms/theProof/09-mcafee-500x360.jpg'
import img10 from '../../../assets/organisms/theProof/10-suzuki-500x360.jpg'
import img11 from '../../../assets/organisms/theProof/11-verizon-500x360.jpg'
import img12 from '../../../assets/organisms/theProof/12-conviva-500x360.jpg'
import img13 from '../../../assets/organisms/theProof/13-manpower-500x360.jpg'
import img14 from '../../../assets/organisms/theProof/14-honda-500x360.jpg'
import img15 from '../../../assets/organisms/theProof/15-petrobras-500x360.jpg'
import img16 from '../../../assets/organisms/theProof/16-visa-500x360.jpg'
import img17 from '../../../assets/organisms/theProof/17-arkadium-5-500x360.jpg'
import img18 from '../../../assets/organisms/theProof/18-junglebat-500x360.jpg'
import img19 from '../../../assets/organisms/theProof/19-flixster-500x360.jpg'
import img20 from '../../../assets/organisms/theProof/20-panasonic-500x360.jpg'
import img22 from '../../../assets/organisms/theProof/22-nissan-500x360.jpg'
import img23 from '../../../assets/organisms/theProof/23-continuumfi-500x360.jpg'
import img24 from '../../../assets/organisms/theProof/24-mym-4-500x360.jpg'
import img25 from '../../../assets/organisms/theProof/25-trinity-2-500x360.jpg'
import img26 from '../../../assets/organisms/theProof/26-oasis-collections-3-500x360.jpg'
import img27 from "../../../assets/organisms/theProof/27-crackle-500x360.jpg"


const menu = [
    {
        id: 1,
        image: { img27 },
        name: "Crackle",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 2,
        image: { img26 },
        name: "Oasis Collections",
        type: ("ecommerce" || "web-site"),
        description: "Ecommerce / Web Site"
    },
    {
        id: 3,
        image: { img25 },
        name: "Trinity Wall Street Church",
        type: "web-site",
        description: "Web Site"
    },
    {
        id: 4,
        image: { img24 },
        name: "M&M",
        type: "banners-campaign",
        description: "Banners Campaign"
    },
    {
        id: 5,
        image: { img17 },
        name: "Arkadium",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 6,
        image: { img4 },
        name: "Muniaxis",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 7,
        image: { img1 },
        name: "Emmys",
        type: "mobile-app",
        description: "Mobile App"
    },
    {
        id: 8,
        image: { img2 },
        name: "Emmys FYC",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 9,
        image: { img6 },
        name: "Endemol",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 10,
        image: { img3 },
        name: "Hoopla",
        type: "ecommerce" || "web-site",
        description: "Ecommerce / Web Site"
    },
    {
        id: 11,
        image: { img5 },
        name: "Coldwell Banker",
        type: "web-site",
        description: "Web Site"
    },
    {
        id: 12,
        image: { img7 },
        name: "Nascar",
        type: "banners-campaign",
        description: "Banners Campaign"
    },
    {
        id: 13,
        image: { img8 },
        name: "Agilent Technologies",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 14,
        image: { img9 },
        name: "McAfee",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 15,
        image: { img10 },
        name: "Suzuki",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 16,
        image: { img11 },
        name: "Verizon",
        type: "web-app",
        description: "Web App"
    },

    {
        id: 17,
        image: { img12 },
        name: "Conviva",
        type: "mobile-app",
        description: "Mobile App"
    },
    {
        id: 18,
        image: { img13 },
        name: "Manpower",
        type: "interactive-kiosk",
        description: "Interactive Kiosk"
    },
    {
        id: 19,
        image: { img14 },
        name: "Honda",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 20,
        image: { img15 },
        name: "Petrobras",
        type: "ecommerce" || "web-site",
        description: "Ecommerce / Web Site"
    },
    {
        id: 22,
        image: { img16 },
        name: "Visa",
        type: "web-site",
        description: "Web Site"
    },
    {
        id: 23,
        image: { img18 },
        name: "Junglebat",
        type: "banners-campaign",
        description: "Banners Campaign"
    },
    {
        id: 24,
        image: { img19 },
        name: "Flixster",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 25,
        image: { img20 },
        name: "Panasonic",
        type: "web-app",
        description: "Web App"
    },
    {
        id: 26,
        image: { img22 },
        name: "Nissan",
        type: "mobile-app",
        description: "Mobile App"
    },
    {
        id: 27,
        image: { img23 },
        name: "Continuumfi",
        type: "ecommerce" || "web-site",
        description: "Ecommerce / Web Site"
    }
]


const TheProofRow_3 = () => {
    const [selectedType, setSelectedType] = useState(null);
    const handleClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div className='tp-row-3'>
            <div className='tp-row-3-container'>
                <div className='tp-row-3-text-content'>
                    <ul className='tp-row-3-button'>
                        <li onClick={() => handleClick(null)}>All</li>
                        <li onClick={() => handleClick('banners-campaign')}>Banners Campaign</li>
                        <li onClick={() => handleClick("ecommerce")}>Ecommerce</li>
                        <li onClick={() => handleClick("interactive-kiosk")}>Interactive Kiosk</li>
                        <li onClick={() => handleClick("mobile-app")}>Mobile App</li>
                        <li onClick={() => handleClick("web-site")}>Web App</li>
                        <li onClick={() => handleClick("web-app")}>Web Site</li>
                    </ul>
                </div>
                <br />
                <div className='tp-row-3-content-item'>
                    {menu
                        .filter((item) => !selectedType || item.type === selectedType)
                        .map((item) => (
                            <div className='tp-row-3-item' key={item.id}>
                                <figure><img src={item.image} alt={item.name} /></figure>
                                <div className='tp-row-3-content-text'>
                                    <div className="tp-row-3-title-text">{item.name}</div>
                                    <div className="tp-row-3-subtitle-text">{item.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TheProofRow_3
