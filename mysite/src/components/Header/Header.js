import React from "react";
import { Link } from "react-router-dom";

import './Header.css';


const Header = () => {
  return (
    <nav className="secoes">
      <Link className="cabecalho" to="/">ABOUT ME</Link>
      <Link className="cabecalho" to="/Portifólio">PORTIFÓLIO</Link>
      <Link className="cabecalho" to="/Contato">CURRICULUM</Link>

    </nav>
  )
};

export default Header;
















