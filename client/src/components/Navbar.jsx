import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MediMart</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Medicines</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;