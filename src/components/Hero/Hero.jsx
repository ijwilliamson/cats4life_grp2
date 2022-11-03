import "./Hero.css";
import bsh from "../../imgs/bsh.png";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-small-text">
            The perfect place for you find a thrue friend!
          </p>
          <div className="hero-title">Find today</div>
          <div className="hero-title">
            your <u>pawwferct</u>
          </div>
          <div className="hero-title">cat</div>
          <p className="hero-text">
            Owning a cat can bring unconditional love and companionship to your
            life. Having a feline friend can also help to relieve stress and
            improve your heart health. Find today your new best friend!
          </p>
          <button className="hero-btn refresh-btn">About us</button>
        </div>
        <div className="hero-right">
          <img src={bsh} alt="cat" />
          <div className="bsh-circle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
