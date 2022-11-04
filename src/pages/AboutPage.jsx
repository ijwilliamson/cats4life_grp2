import "./AboutPage.css";
import cat from "../imgs/cat-bg.png";

const AboutPage = () => {
  return (
    <div className="about-bg">
      <div className="about-info">
        <div className="about-text">
          <div className="about-leftside">
            <h2>Hello!</h2>
            <h2>We are</h2>
            <h2>
              Cats<strong>4Life</strong>
            </h2>
            <p>
              Here at <strong>Cats4Life</strong>, we put our cats welfare first.{" "}
              <strong className="purple-text">
                Our goals are to help as many cats in need as we possibly can
              </strong>
              ; rehabilitate sick and injured cats, find adoptable cats their
              new home, offer sanctuary for those unable to be adopted, and help
              provide TNR for feral cats where possible.
            </p>
            <p>
              We are a small rescue based in Blackpool, Lancashire. Cats4Life is
              solely run by unpaid volunteers, who dedicate their own time to
              caring for the cats of the Fylde Coast.
            </p>
          </div>
          <div className="about-rightside">
            <div className="about-button">
              <p>Adopt a cat</p>
              <p>
                make a <span className="purple-text">difference</span>
              </p>
              <button className="about-btn refresh-btn">
                Cats available to adoption
              </button>
            </div>
          </div>
        </div>
        <div className="about-header">
          <img src={cat} alt="cat-bg" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
