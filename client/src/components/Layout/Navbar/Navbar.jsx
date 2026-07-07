import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MediMart</h2>
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
          <Link to="/cart">Cart</Link>
        </li>
      </ul>

      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;