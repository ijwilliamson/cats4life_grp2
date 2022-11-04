import "./Footer.css";
import "../../App.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-bg" onClick={scrollToTop}>
      {/* {window.scrollY > 0 && (
        <div className="scroll-icon" onClick={scrollToTop}>
          <i className="fa-solid fa-circle-chevron-up"></i>
        </div>
      )} */}

      <div>
        <p>Codenation Bootcamp - React ECommerce Project</p>
        <p>Made with ♥ by Ian, Mayranne and Yan</p>
      </div>
    </div>
  );
};

export default Footer;
