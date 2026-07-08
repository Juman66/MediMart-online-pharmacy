import { Link } from "react-router-dom";
import { FaNotesMedical, FaShoppingCart } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import "./Navbar.css";
import logo from "../../../assets/images/logo/medimart-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
<div className="logo">
    <img
        src={logo}
        alt="MediMart Logo"
        className="logo-image"
    />
</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/medicines">Medicines</Link>
        </li>

        <li>
          <Link to="/">Categories</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
        <Link to="/cart" className="cart-link">
        <FaShoppingCart />
        <span>Cart</span>
        </Link>
        </li>
      </ul>

      <Link to="/login">
        <button className="login-btn">
          Login
          <HiArrowRight className="arrow-icon" />
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;