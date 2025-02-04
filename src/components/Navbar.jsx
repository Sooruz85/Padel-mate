import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        <li><Link to="/matchmaking">Matchmaking</Link></li>
        <li><Link to="/reservation">Réservation</Link></li>
        <li><Link to="/confirmation">Confirmation</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
