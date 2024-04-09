import "../../Styles/pages/home/HomeRow_5.css";
import Carrousel from "../carrousel/Carrousel";
import Frame from "../../molecules/header/Frame";

const HomeRow_5 = () => {
  return (
    <>
      <section className="row-5">
        <div></div>
        <div>
          <div>
            <div className="cp-row-7-title" style={{ marginTop: "30px" }}>
              <Frame text="WHAT OUR CLIENTS SAY" lineClass="cp-row-7-line" />
            </div>
            <Carrousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeRow_5;
