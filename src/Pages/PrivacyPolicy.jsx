

import React from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./Legal.css";

function PrivacyPolicy() {
  useSEO(
    "SkillForge – Learning & Productivity Blog",
    "Explore practical tips about productivity, time management, learning skills, and career development."
  );
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>

      <p>
        Welcome to SkillForge – Learning & Productivity Blog.
        Your privacy is important to us. This Privacy Policy
        explains how we collect and use information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect your name, email address, and message
        when you contact us through our website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information to respond to your questions,
        improve our website, and provide a better experience.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Our website or its hosting services may use cookies
        to improve website performance and user experience.
      </p>

      <h2>4. Information Security</h2>
      <p>
        We take reasonable steps to protect personal
        information from unauthorized access.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our website may contain links to external websites.
        We are not responsible for their privacy practices.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy when necessary.
        Any changes will be published on this page.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy,
        please contact us through our <Link to="/contact">Contact Page</Link>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
