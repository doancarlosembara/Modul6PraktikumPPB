// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Menambahkan import CSS

const Navbar = () => {
  const location = useLocation();

  // Tentukan apakah halaman saat ini adalah DetailFilm atau Profile
  const isDetailFilm = location.pathname.includes("/detail/");
  const isProfile = location.pathname === "/Profile";

  return (
    <nav>
      <div className="logo">
        <Link to="/ListMovie">{isDetailFilm || isProfile ? "Kembali" : "Movie App"}</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        {/* Tambahkan item menu lainnya sesuai kebutuhan */}
      </ul>
    </nav>
  );
};

export default Navbar;
