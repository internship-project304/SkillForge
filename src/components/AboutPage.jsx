
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: "📚",
      title: "Practical Knowledge",
      description:
        "Explore useful information, practical ideas, and techniques that you can apply in your daily life."
    },
    {
      icon: "⏰",
      title: "Better Productivity",
      description:
        "Learn how to manage your time, organize your tasks, and make every day more productive."
    },
    {
      icon: "🎯",
      title: "Personal Growth",
      description:
        "Build valuable skills, develop positive habits, and take meaningful steps toward your goals."
    },
    {
      icon: "💡",
      title: "Continuous Learning",
      description:
        "Discover new ideas and learning strategies that support your personal and professional development."
    }
  ];

  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content about-reveal">
          <span className="about-label">ABOUT SKILLFORGE</span>


          <p>
            Welcome to SkillForge, SkillForge is an educational and productivity platform designed to help students, learners, 
            and professionals improve their knowledge, develop essential skills, and achieve their personal and professional goals.
          </p>
          <p>Our website provides useful articles, practical learning strategies, time management techniques, 
            productivity tips, and career development guidance. We believe that continuous learning and effective planning are the keys to success.</p>

          <Link to="/blog" className="about-btn">
            Explore Our Blog
          </Link>
        </div>

        <div className="about-hero-image about-reveal">
          <img
            src="https://geteducationnews.com/wp-content/uploads/2023/07/Teaching-skills.jpg"
            alt="Students learning and working together"
          />

          <div className="about-floating-card">
            <span>✨</span>
            <div>
              <strong>Keep Learning</strong>
              <small>Build a better future</small>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro">
        <div className="about-intro-image about-reveal">
          <img
            src="https://img.magnific.com/premium-photo/person-engaged-e-learning-with-holographic-interface_1169301-20173.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Person studying and working on a laptop"
          />
        </div>

        <div className="about-intro-content about-reveal">
          <span className="about-label">WHO WE ARE</span>

          <h2>
            Discover a Better Way to
            <span> Learn and Grow</span>
          </h2>

          <p>
            SkillForge is an educational platform created for people
            who want to learn new things, improve their productivity,
            and develop useful life and career skills.
          </p>

          <p>
            We share informative articles, simple learning techniques,
            productivity tips, and practical guidance to make learning
            easier and more meaningful.
          </p>

          <p>
            Whether you are a student, professional, or someone who
            enjoys learning, SkillForge provides ideas and resources
            to help you move forward.
          </p>

          <Link to="/blog" className="about-text-link">
            Start Exploring →
          </Link>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-mission">
        <div className="about-section-heading about-reveal">
          <span className="about-label">OUR PURPOSE</span>
          <h2>Our Mission & Vision</h2>
          <p>
            Our mission at SkillForge is to provide valuable educational resources, practical learning strategies, and productivity guidance that help students and professionals improve their skills,
             manage their time effectively, and achieve their goals. We aim to make learning simple, accessible, and useful for everyone. 
          </p>
          <p>Our vision is to become a trusted learning and productivity platform that inspires continuous growth, encourages innovation,
             and empowers individuals to build successful careers and productive lives through knowledge, skills, and effective learning habits.</p>
        </div>

        <div className="mission-grid">
          <div className="mission-card about-reveal">
            <div className="mission-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide helpful, understandable, and
              practical educational content that encourages people
              to improve their knowledge, build better habits, and
              use their time effectively.
            </p>
          </div>

          <div className="mission-card vision-card about-reveal">
            <div className="mission-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a trusted learning resource
              where students and professionals can discover new
              ideas, develop valuable skills, and create opportunities
              for a successful future.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="about-benefits">
        <div className="about-section-heading about-reveal">
          <span className="about-label">WHY SKILLFORGE</span>
          <h2>What You Can Learn With Us</h2>
          <p>
            Explore useful resources designed to support your
            learning journey and everyday progress.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              className="benefit-card about-reveal"
              key={benefit.title}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Image Section */}
      <section className="about-learning">
        
          <Link to="/categories/learning-skills" className="about-btn">
            Explore Learning Skills
          </Link>
        

        
      </section>

    
    </main>
  );
}

export default AboutPage;
