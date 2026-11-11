

import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

function TermsConditions() {
  return (
    <div className="legal-page">
      <h1>Terms & Conditions</h1>

      <p>
        Welcome to SkillForge – Learning & Productivity Blog.
        By using our website, you agree to follow these
        Terms & Conditions.
      </p>

      <h2>1. Website Purpose</h2>
      <p>
        SkillForge provides educational articles, learning
        resources, and productivity tips to help users
        improve their knowledge and skills.
      </p>

      <h2>2. Use of Content</h2>
      <p>
        All content on this website is provided for
        educational and informational purposes.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        Users must not misuse the website, publish harmful
        content, or attempt to damage its functionality.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        Website content, text, and design elements may not
        be copied or reused without permission.
      </p>

      <h2>5. External Links</h2>
      <p>
        Our website may include links to other websites.
        We are not responsible for their content or services.
      </p>

      <h2>6. Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions at any time.
        Updated terms will be published on this page.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions about these terms, please
        visit our <Link to="/contact">Contact Page</Link>.
      </p>
    </div>
  );
}

export default TermsConditions;
