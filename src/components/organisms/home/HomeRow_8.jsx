import "../../Styles/pages/home/HomeRow_8.css";

import usa from "../../../assets/organisms/home/homeRow_8/IconAzul6.png";
import chat from "../../../assets/organisms/home/homeRow_8/IconAzul8.png";
import team from "../../../assets/organisms/home/homeRow_8/IconAzul10.png";
import recruiting from "../../../assets/organisms/home/homeRow_8/IconAzul9.png";
import timezone from "../../../assets/organisms/home/homeRow_8/IconAzul11.png";
import Frame from "../../molecules/header/Frame";

const HomeRow_8 = () => {
  return (
    <div className="row-8">
      <div></div>
      <div>
        <div className="cp-row-7-title" style={{ marginTop: "30px" }}>
          <Frame text="OUR DIFFERENTIATORS" lineClass="cp-row-7-line" />
        </div>
        <div className="row-8-container">
          <div></div>
          <div className="row-8-column">
            <div className="row-8-item">
              <div className="img-container">
                <img src={usa} className="row-8-imag-1" />
              </div>
              <h1 className="row-8-colum-title">Global</h1>
              <p className="row-8-colum-paragraph">
                Our company serves on a global scale, operating in over 25
                different countries.
              </p>
            </div>
            <div className="row-8-item">
              <div className="img-container">
                <img src={chat} className="row-8-imag-2" />
              </div>
              <h1 className="row-8-colum-title">Different industries</h1>
              <p className="row-8-colum-paragraph">
                Our professionals have knowledge and experience in several areas
                of the industry.
              </p>
            </div>
            <div className="row-8-item">
              <div className="img-container">
                <img src={team} className="row-8-imag-3" />
              </div>
              <h1 className="row-8-colum-title">Best talents</h1>
              <p className="row-8-colum-paragraph">
                Captiva is in a constant search for the best professionals
                available in the market.
              </p>
            </div>
            <div className="row-8-item">
              <div className="img-container">
                <img src={recruiting} className="row-8-imag-4" />
              </div>
              <h1 className="row-8-colum-title">Remote first</h1>
              <p className="row-8-colum-paragraph">
                At Captiva, we give preference to tasks carried out remotely,
                which guarantees a better quality of life for our employees.
              </p>
            </div>
            <div className="row-8-item">
              <div className="img-container">
                <img src={timezone} className="row-8-imag-5" />
              </div>
              <h1 className="row-8-colum-title">Worldwide projects</h1>
              <p className="row-8-colum-paragraph">
                Here we carry out grandiose worldwide projects, which count on
                the work of development professionals spread all over the
                planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_8;
