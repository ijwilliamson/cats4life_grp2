import "./Hero.css";

import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-small-text">
            The perfect place for you find a thrue friend.
          </p>
          <div className="hero-first-title">Find</div>
          <div className="hero-title">your pawwferct</div>
          <div className="hero-title">cat</div>
          <p className="hero-text">
            Owning a cat can bring unconditional love and companionship to your
            life. Having a feline friend can also help to relieve stress and
            improve your heart health. Owning a cat can be an extremely
            rewarding relationship.
          </p>
          <button className="hero-btn refresh-btn">About us</button>
        </div>
        <div className="hero-right">
          <p>img</p>
          <div>circle</div>
          <p>img</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
