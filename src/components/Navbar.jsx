import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          Padel Reservation
        </Link>
        <button
          className="btn btn-outline-dark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="dropdown-menu show position-absolute end-0 mt-2 p-3 shadow bg-white" style={{ right: "20px", top: "50px" }}>
          <Link className="dropdown-item" to="/profile" onClick={() => setMenuOpen(false)}>Profil</Link>
          <Link className="dropdown-item" to="/matchmaking" onClick={() => setMenuOpen(false)}>Matchmaking</Link>
          <Link className="dropdown-item" to="/reservation" onClick={() => setMenuOpen(false)}>Réservation</Link>
          <Link className="dropdown-item" to="/confirmation" onClick={() => setMenuOpen(false)}>Confirmation</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
