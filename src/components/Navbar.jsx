

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* SF Logo and Project Name */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">SF</span>

          <span className="logo-text">
            <span className="logo-name">SkillForge</span>
            <span className="logo-tagline">
              Learning & Productivity Blog
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>

          <li>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
          </li>

          {/* Categories Dropdown */}
          <li className={`dropdown ${dropdownOpen ? "dropdown-active" : ""}`}>
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Categories
              <span className="dropdown-arrow">⌄</span>
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link to="/categories/productivity" onClick={closeMenu}>
                  Productivity
                </Link>
              </li>

              <li>
                <Link to="/categories/time-management" onClick={closeMenu}>
                  Time Management
                </Link>
              </li>

              <li>
                <Link to="/categories/learning-skills" onClick={closeMenu}>
                  Learning Skills
                </Link>
              </li>

              <li>
                <Link to="/categories/career-development" onClick={closeMenu}>
                  Career Development
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>

        </ul>

        {/* Explore Articles Button */}
        <div className="navbar-actions">
          <Link to="/blog" className="nav-button">
            Explore Articles
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setDropdownOpen(false);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
