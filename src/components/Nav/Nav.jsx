import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}

<nav class="nav-container">
  <h1 id="logo">LOGO</h1>

  <div class="hamburger">
    <span class="lines"></span>
    <span class="lines"></span>
    <span class="lines"></span>
  </div>

  <ul id="nav-links">
    <li>
      <a href="#" class="links">
        Home
      </a>
    </li>
    <li>
      <a href="#" class="links">
        About
      </a>
    </li>
    <li>
      <a href="#" class="links">
        Contacts
      </a>
    </li>
    <li>
      <a href="#" class="links">
        Delivery
      </a>
    </li>
  </ul>
</nav>;


