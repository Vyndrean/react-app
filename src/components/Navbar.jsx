import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav>
        <button className="burger" onClick={() => toggleMenu()}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul id="menulist" className={menuOpen ? 'open' : ''}>
          <li>
            <Link className="lnk" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="lnk" to="/about">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link className="lnk" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
        <hr />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
