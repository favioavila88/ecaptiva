import React, { useState } from "react";
import "../../Styles/pages/theProof/TheProofRow_3.css";

const menu = [
  {
    id: 1,
    image: "https://www.truelogic.io/hubfs/images/proof/27-crackle-500x360.jpg",
    name: "Crackle",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 2,
    image:
      "https://www.truelogic.io/hubfs/images/proof/26-oasis-collections-3-500x360.jpg",
    name: "Oasis Collections",
    type: "ecommerce" || "web-site",
    description: "Ecommerce / Web Site",
  },
  {
    id: 3,
    image:
      "https://www.truelogic.io/hubfs/images/proof/25-trinity-2-500x360.jpg",
    name: "Trinity Wall Street Church",
    type: "web-site",
    description: "Web Site",
  },
  {
    id: 4,
    image: "https://www.truelogic.io/hubfs/images/proof/24-mym-4-500x360.jpg",
    name: "M&M",
    type: "banners-campaign",
    description: "Banners Campaign",
  },
  {
    id: 5,
    image:
      "https://www.truelogic.io/hubfs/images/proof/17-arkadium-5-500x360.jpg",
    name: "Arkadium",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 6,
    image:
      "https://www.truelogic.io/hubfs/images/proof/04-muniaxis-1-500x360.jpg",
    name: "Muniaxis",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 7,
    image: "https://www.truelogic.io/hubfs/images/proof/01-emmys-2-500x360.jpg",
    name: "Emmys",
    type: "mobile-app",
    description: "Mobile App",
  },
  {
    id: 8,
    image:
      "https://www.truelogic.io/hubfs/images/proof/02-emmys-fyc-500x360.jpg",
    name: "Emmys FYC",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 9,
    image: "https://www.truelogic.io/hubfs/images/proof/06-endemol-500x360.jpg",
    name: "Endemol",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 10,
    image: "https://www.truelogic.io/hubfs/images/proof/03-hoopla-500x360.jpg",
    name: "Hoopla",
    type: "ecommerce" || "web-site",
    description: "Ecommerce / Web Site",
  },
  {
    id: 11,
    image:
      "https://www.truelogic.io/hubfs/images/proof/05-coldwell-banker-500x360.jpg",
    name: "Coldwell Banker",
    type: "web-site",
    description: "Web Site",
  },
  {
    id: 12,
    image: "https://www.truelogic.io/hubfs/images/proof/07-nascar-500x360.jpg",
    name: "Nascar",
    type: "banners-campaign",
    description: "Banners Campaign",
  },
  {
    id: 13,
    image:
      "https://www.truelogic.io/hubfs/images/proof/08-agilent-tech-1-500x360.jpg",
    name: "Agilent Technologies",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 14,
    image: "https://www.truelogic.io/hubfs/images/proof/09-mcafee-500x360.jpg",
    name: "McAfee",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 15,
    image: "https://www.truelogic.io/hubfs/images/proof/10-suzuki-500x360.jpg",
    name: "Suzuki",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 16,
    image: "https://www.truelogic.io/hubfs/images/proof/11-verizon-500x360.jpg",
    name: "Verizon",
    type: "web-app",
    description: "Web App",
  },

  {
    id: 17,
    image: "https://www.truelogic.io/hubfs/images/proof/12-conviva-500x360.jpg",
    name: "Conviva",
    type: "mobile-app",
    description: "Mobile App",
  },
  {
    id: 18,
    image:
      "https://www.truelogic.io/hubfs/images/proof/13-manpower-500x360.jpg",
    name: "Manpower",
    type: "interactive-kiosk",
    description: "Interactive Kiosk",
  },
  {
    id: 19,
    image: "https://www.truelogic.io/hubfs/images/proof/14-honda-500x360.jpg",
    name: "Honda",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 20,
    image:
      "https://www.truelogic.io/hubfs/images/proof/15-petrobras-500x360.jpg",
    name: "Petrobras",
    type: "ecommerce" || "web-site",
    description: "Ecommerce / Web Site",
  },
  {
    id: 22,
    image: "https://www.truelogic.io/hubfs/images/proof/16-visa-500x360.jpg",
    name: "Visa",
    type: "web-site",
    description: "Web Site",
  },
  {
    id: 23,
    image:
      "https://www.truelogic.io/hubfs/images/proof/18-junglebat-500x360.jpg",
    name: "Junglebat",
    type: "banners-campaign",
    description: "Banners Campaign",
  },
  {
    id: 24,
    image:
      "https://www.truelogic.io/hubfs/images/proof/19-flixster-500x360.jpg",
    name: "Flixster",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 25,
    image:
      "https://www.truelogic.io/hubfs/images/proof/20-panasonic-500x360.jpg",
    name: "Panasonic",
    type: "web-app",
    description: "Web App",
  },
  {
    id: 26,
    image: "https://www.truelogic.io/hubfs/images/proof/22-nissan-500x360.jpg",
    name: "Nissan",
    type: "mobile-app",
    description: "Mobile App",
  },
  {
    id: 27,
    image:
      "https://www.truelogic.io/hubfs/images/proof/23-continuumfi-500x360.jpg",
    name: "Continuumfi",
    type: "ecommerce" || "web-site",
    description: "Ecommerce / Web Site",
  },
];

const TheProofRow_3 = () => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="tp-row-3">
      <div className="tp-row-3-container">
        <div className="tp-row-3-text-content"></div>
        <br />
        <div className="tp-row-3-content-item">
          {menu
            .filter((item) => !selectedType || item.type === selectedType)
            .map((item) => (
              <div className="tp-row-3-item" key={item.id}>
                <figure>
                  <img src={item.image} alt={item.name} />
                </figure>
                <div className="tp-row-3-content-text">
                  <div className="tp-row-3-title-text">{item.name}</div>
                  <div className="tp-row-3-subtitle-text">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TheProofRow_3;
