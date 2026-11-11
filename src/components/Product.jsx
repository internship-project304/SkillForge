
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./Product.css";

const strategies = [
  {
    number: "01",
    title: "Plan Your Day",
    description:
      "Start each morning with a clear plan. Write down your important tasks and decide what needs your attention first.",
    icon: "📅",
  },
  {
    number: "02",
    title: "Focus on One Task",
    description:
      "Avoid multitasking. Give your attention to one activity at a time to improve the quality and speed of your work.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Take Smart Breaks",
    description:
      "Short breaks help refresh your mind, reduce stress, and maintain your energy throughout the day.",
    icon: "☕",
  },
  {
    number: "04",
    title: "Build Better Habits",
    description:
      "Small positive habits, repeated consistently, can create meaningful improvements in your personal and professional life.",
    icon: "🌱",
  },
];

const routine = [
  {
    time: "7:00 AM",
    title: "Start Your Morning",
    description: "Wake up, get ready, and begin with a positive mindset.",
  },
  {
    time: "8:00 AM",
    title: "Plan Important Tasks",
    description: "Choose your top three priorities for the day.",
  },
  {
    time: "9:00 AM",
    title: "Deep Work Session",
    description: "Focus on your most important task without distractions.",
  },
  {
    time: "12:00 PM",
    title: "Rest and Recharge",
    description: "Take a break, eat well, and refresh your mind.",
  },
  {
    time: "2:00 PM",
    title: "Continue Your Goals",
    description: "Complete remaining tasks and learn something new.",
  },
  {
    time: "8:00 PM",
    title: "Review Your Progress",
    description: "Reflect on your achievements and prepare for tomorrow.",
  },
];

const articles = [
  {
    id: 1,
    title: "How to Improve Your Daily Productivity",
    description:
      "Discover practical ways to manage your time, stay focused, and complete your daily tasks effectively.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=900",
  },
  {
    id: 5,
    title: "Build Better Habits for a Productive Life",
    description:
      "Learn how small daily habits can improve your routine and help you achieve long-term goals.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900",
  },
  {
    id: 7,
    title: "Simple Ways to Stay Focused at Work",
    description:
      "Explore simple techniques to avoid distractions and give your best attention to important work.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },
];

function Product() {
   useSEO(
    "SkillForge – Learning & Productivity Blog",
    "Explore practical tips about productivity, time management, learning skills, and career development."
  );
  useEffect(() => {
    const elements = document.querySelectorAll(".productivity-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("productivity-visible");
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
    <main className="productivity-page">

      {/* Hero Section */}
      <section className="productivity-hero">
        <div className="productivity-hero-content">
          <span className="productivity-label">
            SKILLFORGE / PRODUCTIVITY
          </span>

          <h1>
            Make Your Time
            <span> More Valuable.</span>
          </h1>

          <p>
            Build better habits, improve your focus, and discover practical
            strategies to make every day more meaningful and productive.
          </p>

          <div className="productivity-hero-buttons">
            <a href="#strategies" className="productivity-primary-btn">
              Explore Strategies
            </a>
            <Link to="/blog" className="productivity-outline-btn">
              Read Articles
            </Link>
          </div>

          <div className="productivity-hero-note">
            <span>✓</span> Practical ideas for everyday success
          </div>
        </div>

        <div className="productivity-hero-image">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1100"
            alt="Organized workspace for productive work"
          />
          <div className="productivity-image-card">
            <span>Today's Goal</span>
            <strong>Focus. Plan. Achieve.</strong>
          </div>
        </div>
      </section>


      {/* Strategy Cards */}
      <section className="productivity-strategies" id="strategies">
        <div className="productivity-section-heading productivity-reveal">
          <div>
            <span className="productivity-small-heading">
              SIMPLE STRATEGIES
            </span>
            <h2>Four Ways to Improve Your Productivity</h2>
          </div>
          <p>
            Start with small changes that make a real difference in your
            everyday routine.
          </p>
        </div>

        <div className="productivity-strategy-grid">
          {strategies.map((item) => (
            <article
              className="productivity-strategy-card productivity-reveal"
              key={item.number}
            >
              <div className="productivity-card-top">
                <span className="productivity-strategy-icon">
                  {item.icon}
                </span>
                <span className="productivity-number">{item.number}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="productivity-card-line"></span>
            </article>
          ))}
        </div>
      </section>

      {/* Daily Routine */}
      <section className="productivity-routine">
        <div className="productivity-routine-image productivity-reveal">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000"
            alt="Daily planner and notebook"
          />
          <div className="productivity-routine-badge">
            <strong>6</strong>
            <span>Simple Steps</span>
          </div>
        </div>

        <div className="productivity-routine-content productivity-reveal">
          <span className="productivity-small-heading">
            YOUR DAILY ROUTINE
          </span>
          <h2>Create a Day That Works for You</h2>
          <p>
            A balanced routine gives your day structure while leaving room
            for rest, learning, and personal growth.
          </p>

          <div className="productivity-timeline">
            {routine.map((item, index) => (
              <div className="productivity-timeline-item" key={item.time}>
                <div className="productivity-timeline-dot"></div>
                <div>
                  <span>{item.time}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Related Articles */}
      <section className="productivity-articles">
        <div className="productivity-section-heading productivity-reveal">
          <div>
            <span className="productivity-small-heading">
              KEEP LEARNING
            </span>
            <h2>Explore Productivity Articles</h2>
          </div>
          <Link to="/blog" className="productivity-view-all">
            View All Articles →
          </Link>
        </div>

        <div className="productivity-article-grid">
          {articles.map((article) => (
            <article
              className="productivity-article-card productivity-reveal"
              key={article.id}
            >
              <Link to={`/blog/${article.id}`}>
                <div className="productivity-article-image">
                  <img src={article.image} alt={article.title} />
                </div>

                <div className="productivity-article-content">
                  <span>PRODUCTIVITY</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <strong>Read Article →</strong>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>


    </main>
  );
}

export default Product;
