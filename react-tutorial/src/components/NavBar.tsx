import "../assets/NavBar.css";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar">
      <span className="logo">Astro Shop</span>
        <div className="nav-options">
          <Link to="/Market">Market</Link>
          <Link to="/Manage">Manage</Link>
          <Link to="/Login">Login</Link>
        </div>
    </div>
  );
}

export default NavBar;
