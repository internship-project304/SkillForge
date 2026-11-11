

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cont.css";

function Cont() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setSubmitted(false);
  };

  // First show Privacy Policy and Terms
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPolicy(true);
    setAccepted(false);
  };

  // Confirm final submission
  const confirmSubmit = () => {
    if (!accepted) return;

    setSubmitted(true);
    setShowPolicy(false);
    setAccepted(false);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  // Scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page">     
    {/* Contact Information */}
      <section className="contact-info-section">

        <div className="contact-section-heading contact-reveal">
          <span className="contact-label">CONTACT SKILLFORGE</span>

          <h2>We Are Here to Help You</h2>

          <p>
            Your thoughts and suggestions help us improve our
            learning and productivity platform.
          </p>
        </div>

        <div className="contact-info-grid">

          <div className="contact-info-card contact-reveal">
            <div className="contact-info-icon">✉️</div>

            <h3>Send a Message</h3>

            <p>
              Share your questions, feedback, or suggestions
              through our contact form.
            </p>
          </div>

          <div className="contact-info-card contact-reveal">
            <div className="contact-info-icon">💡</div>

            <h3>Share Your Ideas</h3>

            <p>
              Have an idea for an educational article or learning
              topic? We would love to hear it.
            </p>
          </div>

          <div className="contact-info-card contact-reveal">
            <div className="contact-info-icon">🤝</div>

            <h3>Collaborate With Us</h3>

            <p>
              Interested in educational content or collaboration?
              Contact us to explore opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-main-section" id="contact-form">

        {/* Image Side */}
        <div className="contact-form-image contact-reveal">

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000"
            alt="Professionals working together"
          />

          <div className="contact-image-text">
            <h3>Every Great Idea Starts With a Conversation.</h3>

            <p>
              Connect with SkillForge and share your thoughts
              about learning, productivity, and personal growth.
            </p>
          </div>

        </div>

        {/* Form Side */}
        <div className="contact-form-container contact-reveal">

          <span className="contact-label">SEND US A MESSAGE</span>

          <h2>Get in Touch</h2>

          <p className="contact-form-description">
            Complete the form below to contact SkillForge.
            All fields are required.
          </p>

          {/* Success Message */}
          {submitted && (
            <div className="contact-success" role="status">
              <div className="success-icon">✓</div>

              <h3>Thank You for Contacting Us!</h3>

              <p>
                Your message has been submitted successfully.
                We appreciate your interest in SkillForge.
              </p>
            </div>
          )}

          {/* Contact Form */}
          {!showPolicy && !submitted && (
            <form onSubmit={handleSubmit}>

              <div className="contact-form-group">
                <label htmlFor="contact-name">Your Name</label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="Enter message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message →
              </button>

            </form>
          )}

          {/* Privacy Policy and Terms Confirmation */}
          {showPolicy && (
            <div className="contact-policy-box">

              <span className="contact-label">
                BEFORE SUBMISSION
              </span>

              <h3>Review Our Policies</h3>

              <p>
                Before submitting your message, please review
                our Privacy Policy and Terms & Conditions.
                These pages explain how the website operates
                and how information is handled.
              </p>

              <div className="contact-policy-links">

                <Link
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>📄</span>
                  Privacy Policy
                  <span className="policy-arrow">↗</span>
                </Link>

                <Link
                  to="/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>📋</span>
                  Terms & Conditions
                  <span className="policy-arrow">↗</span>
                </Link>

              </div>

              <label className="contact-policy-checkbox">

                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />

                <span>
                  I have read and agree to the Privacy Policy
                  and Terms & Conditions.
                </span>

              </label>

              <div className="contact-policy-buttons">

                <button
                  type="button"
                  className="contact-submit-btn"
                  disabled={!accepted}
                  onClick={confirmSubmit}
                >
                  Confirm & Submit →
                </button>

                <button
                  type="button"
                  className="contact-cancel-btn"
                  onClick={() => {
                    setShowPolicy(false);
                    setAccepted(false);
                  }}
                >
                  Go Back
                </button>

              </div>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Cont;
