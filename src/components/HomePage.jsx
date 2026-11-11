
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const categories = [
    {
      title: "Productivity",
      description: "Learn practical ways to improve focus and achieve more every day.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      link: "/categories/productivity",
    },
    {
      title: "Time Management",
      description: "Manage your time wisely and create a balanced daily routine.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
      link: "/categories/time-management",
    },
    {
      title: "Learning Skills",
      description: "Discover better learning techniques and develop new abilities.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      link: "/categories/learning-skills",
    },
    {
      title: "Career Development",
      description: "Build professional skills and take the next step in your career.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
      link: "/categories/career-development",
    },
  ];

  const articles = [
    {
      title: "How to Build Better Daily Habits",
      description: "Small positive habits can make a big difference in your personal and professional life.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
      category: "Productivity",
      link: "/blog",
    },
    {
      title: "10 Tips for Effective Time Management",
      description: "Discover simple strategies to organize your tasks and make better use of your time.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
      category: "Time Management",
      link: "/blog",
    },
    {
      title: "Improve Your Learning Skills",
      description: "Explore effective study methods that help you understand and remember information.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
      category: "Learning Skills",
      link: "/blog",
    },
  ];

  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-label">
              WELCOME TO SKILLFORGE
            </span>

            <h1>
              Learn Better.
              <span> Work Smarter.</span>
              Grow Faster.
            </h1>

            <p>
              Discover practical ideas, helpful resources, and expert
              insights to improve your productivity, develop new skills,
              manage your time, and build a successful future.
            </p>

            <div className="hero-buttons">
              <Link to="/blog" className="home-btn primary-btn">
                Explore Articles
              </Link>

              <Link to="/about" className="home-btn secondary-btn">
                Learn More
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <h3>Learn</h3>
                <p>New Skills</p>
              </div>

              <div>
                <h3>Improve</h3>
                <p>Productivity</p>
              </div>

              <div>
                <h3>Achieve</h3>
                <p>Your Goals</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://cdn-res.keymedia.com/cms/images/us/037/0305_637721876268321074.jpg"
              alt="Students learning and working together"
            />

            <div className="hero-image-card">
              <span>✦</span>
              <div>
                <h4>Keep Learning</h4>
                <p>Build a better future</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="home-intro">
        <div className="intro-container">

          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Person learning with a laptop"
            />
          </div>

          <div className="intro-content">
            <span className="section-label">ABOUT SKILLFORGE</span>

            <h2>
              Your Journey Towards
              <span> Continuous Growth</span>
            </h2>

            <p>
              SkillForge is a learning and productivity blog designed
              to help you become more organized, knowledgeable, and
              confident. We share useful articles and practical guidance
              to support your personal and professional development.
            </p>

            <p>
              Whether you want to improve your daily routine, learn
              something new, or develop your career, SkillForge gives
              you ideas and resources to move forward.
            </p>

            <Link to="/about" className="text-link">
              Discover More →
            </Link>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="home-categories">
        <div className="section-heading">
          <span className="section-label">EXPLORE OUR TOPICS</span>
          <h2>Discover What You Can Learn</h2>
          <p>
            Explore different topics and find useful ideas for your growth.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              className="category-card"
              key={category.title}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>

              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span>Explore Topic →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="home-articles">
        <div className="section-heading">
          <span className="section-label">OUR LATEST CONTENT</span>
          <h2>Learn Something New Today</h2>
          <p>
            Read helpful articles and discover new ways to improve yourself.
          </p>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <article
              className="article-card"
              key={article.title}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="article-content">
                <span className="article-category">
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <Link to={article.link} className="article-link">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="articles-button">
          <Link to="/blog" className="home-btn primary-btn">
            View All Articles
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="home-benefits">
        <div className="benefits-container">

          <div className="benefits-content">
            <span className="section-label">WHY SKILLFORGE?</span>

            <h2>
              Learn Skills That
              <span> Make a Difference</span>
            </h2>

            <p>
              We believe learning should be practical, simple, and
              valuable. Our content helps you turn useful knowledge
              into everyday action.
            </p>

            <div className="benefit-item">
              <span>01</span>
              <div>
                <h3>Practical Knowledge</h3>
                <p>Get useful tips that you can apply in your daily life.</p>
              </div>
            </div>

            <div className="benefit-item">
              <span>02</span>
              <div>
                <h3>Easy Learning</h3>
                <p>Understand important topics through clear explanations.</p>
              </div>
            </div>

            <div className="benefit-item">
              <span>03</span>
              <div>
                <h3>Personal Growth</h3>
                <p>Develop positive habits and improve your skills.</p>
              </div>
            </div>
          </div>

          <div className="benefits-images">
            <img
              className="benefit-img-one"
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
              alt="Student studying"
            />

            <img
              className="benefit-img-two"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
              alt="Students collaborating"
            />
          </div>

        </div>
      </section>


    </main>
  );
}

export default HomePage;
