import "./About.css";

const About = ({ toggleModal, about }) => {
  return (
    <div className="modal-bg" onClick={toggleModal}>
      <div className="modal-container">
        <div className="side-r">
          <img className="modal-img" src={about.image} alt="cat" />
        </div>
        <div className="side-l">
          <div className="side-title ">
            <p className="cat-description-name">{about.name}</p>
            <p className="cat-description-breed">{about.breed}</p>
          </div>
          <div className="side-description">
            <p className="cat-description-text">
              Hello! If you are here it means that you already liked me and here
              are some of the reasons why you will love me:
            </p>
            <p className="cat-description-text">
              I'm an adorable cat and like to be the boss, I may be small but I
              have a huge personality. I am independent and like to do my own
              thing, but I also like to be the center of attention when I want
              it! Cuddles and playing are my favourite thing. My favourite toy
              is a feather teaser, which I can play with for ages.
            </p>
          </div>
          <div className="cat-description-footer">
            <button className="cat-description-btn">Adopt me</button>
            <div className="cat-fee">
              <p className="cat-description-fee">Adoption fee</p>
              <p className="cat-description-fee">£{about.price}</p>
            </div>
            <button className="cat-description-like">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
