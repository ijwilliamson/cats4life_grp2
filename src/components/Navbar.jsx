import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <p className="logo">
        Cats<strong>4Life</strong>
      </p>

      <div className="basket-container">
        <div className="basket-link">
          <i class="fa-solid fa-basket-shopping"></i>Basket
        </div>
        <div className="basket-number">N</div>
      </div>
    </div>
  );
};

export default Navbar;
