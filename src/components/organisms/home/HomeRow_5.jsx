import "../../Styles/pages/home/HomeRow_5.css";
import Carrousel from "../carrousel/Carrousel";

const HomeRow_5 = () => {
  return (
    <>
      <section className="row-5">
        <div></div>
        <div>
          <div>
            <div className="row-5-title-text">
              <h3 className="row-5-title">WHAT OUR CLIENTS SAY</h3>
            </div>
            <Carrousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeRow_5;
