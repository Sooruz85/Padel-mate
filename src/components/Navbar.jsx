import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-transparent">
      <div className="container-fluid d-flex justify-content-between align-items-center p-3">
        <Link className="navbar-brand text-light" to="/home">
          Padel-Mate
        </Link>
        <div className="nav-links">
          <Link className="nav-item text-light" to="/matchmaking">Matchmaking</Link>
          <Link className="nav-item text-light" to="/profile">###</Link>
          <Link className="nav-item text-light" to="/reservation">Reservation</Link>
          <Link className="nav-item text-light" to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
