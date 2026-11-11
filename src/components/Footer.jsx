
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Project Information */}
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">SF</span>

            <span className="footer-logo-text">
              SkillForge
            </span>
          </Link>

          <h3>Learning & Productivity Blog</h3>

          <p>
            SkillForge is your learning platform for improving
            productivity, developing new skills, managing time,
            and building a successful career.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Our Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Categories</h3>

          <ul>
            <li>
              <Link to="/categories/productivity">
                Productivity
              </Link>
            </li>

            <li>
              <Link to="/categories/time-management">
                Time Management
              </Link>
            </li>

            <li>
              <Link to="/categories/learning-skills">
                Learning Skills
              </Link>
            </li>

            <li>
              <Link to="/categories/career-development">
                Career Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>

          <ul>
            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms-conditions">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SkillForge.
          All Rights Reserved.
        </p>

        <p>
          Learn More. Grow Better. Achieve More.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
