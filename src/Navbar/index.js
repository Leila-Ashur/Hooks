import React from "react";
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        
        <li>
          <a href="/product">Produt</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
