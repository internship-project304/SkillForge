
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Time.css";

const techniques = [
  {
    number: "01",
    title: "Set Clear Priorities",
    icon: "🎯",
    description:
      "Identify the most important tasks and complete them before spending time on less important activities.",
  },
  {
    number: "02",
    title: "Use Time Blocking",
    icon: "🗓️",
    description:
      "Divide your day into focused time slots and assign a specific task to each block.",
  },
  {
    number: "03",
    title: "Avoid Procrastination",
    icon: "🚀",
    description:
      "Start with small actions instead of waiting for the perfect moment. Progress begins when you take action.",
  },
  {
    number: "04",
    title: "Take Regular Breaks",
    icon: "☕",
    description:
      "Give your mind time to rest between focused sessions so you can maintain your energy.",
  },
];

const schedule = [
  {
    time: "7:00 AM",
    title: "Morning Preparation",
    description: "Wake up, get ready, and prepare for the day.",
    type: "Personal",
  },
  {
    time: "8:00 AM",
    title: "Plan Your Priorities",
    description: "Review your tasks and choose your top three goals.",
    type: "Planning",
  },
  {
    time: "9:00 AM",
    title: "Focused Work",
    description: "Work on your most important task without distractions.",
    type: "Deep Work",
  },
  {
    time: "12:00 PM",
    title: "Lunch and Break",
    description: "Take time to relax and recharge your energy.",
    type: "Break",
  },
  {
    time: "2:00 PM",
    title: "Learning and Projects",
    description: "Continue your work, study, or personal projects.",
    type: "Learning",
  },
  {
    time: "5:00 PM",
    title: "Review Your Tasks",
    description: "Check completed tasks and prepare for tomorrow.",
    type: "Review",
  },
];

const articles = [
  {
    id: 2,
    title: "10 Time Management Tips for Students",
    description:
      "Discover useful techniques to organize study time, complete assignments, and balance your daily responsibilities.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900",
  },
  {
    id: 1,
    title: "How to Improve Your Daily Productivity",
    description:
      "Learn how better planning and focused work can help you make the most of every day.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900",
  },
  {
    id: 5,
    title: "Build Better Habits for a Productive Life",
    description:
      "Create consistent routines and build habits that support your long-term goals.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900",
  },
];

function Time() {
  useEffect(() => {
    const elements = document.querySelectorAll(".time-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("time-visible");
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
    <main className="time-page">

      {/* Hero Section */}
      <section className="time-hero">
        <div className="time-hero-content">
          <span className="time-eyebrow">
            SKILLFORGE / TIME MANAGEMENT
          </span>

          <h1>
            Take Control
            <span> of Your Time.</span>
          </h1>

          <p>
            Your time is valuable. Learn how to plan your day, set priorities,
            avoid distractions, and create a routine that helps you reach
            your goals.
          </p>

          <div className="time-hero-actions">
            <a href="#techniques" className="time-main-btn">
              Discover Techniques
            </a>
            <Link to="/blog" className="time-second-btn">
              Explore Articles
            </Link>
          </div>

          <div className="time-hero-stat">
            <span className="time-stat-icon">⏱</span>
            <div>
              <strong>Make Every Hour Count</strong>
              <p>Plan wisely. Work confidently.</p>
            </div>
          </div>
        </div>

        <div className="time-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1100"
            alt="Notebook and calendar for time management"
          />

          <div className="time-clock-card">
            <span className="time-clock-icon">◷</span>
            <div>
              <strong>Time is Precious</strong>
              <span>Use it with purpose.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="time-intro time-reveal">
        <span className="time-section-label">WHY TIME MANAGEMENT MATTERS</span>
        <h2>
          Don't Just Stay Busy.
          <span> Make Progress.</span>
        </h2>
        <p>
          Time management means organizing your activities so you can focus
          on what matters most. With a clear plan and realistic goals, you
          can reduce stress, improve your performance, and create more time
          for the things you enjoy.
        </p>
      </section>

      {/* Techniques */}
      <section className="time-techniques" id="techniques">
        <div className="time-heading time-reveal">
          <span className="time-section-label">SMARTER WORK HABITS</span>
          <h2>Four Techniques to Manage Your Time</h2>
          <p>
            Build a better routine with simple techniques that you can use
            in your studies, work, and everyday life.
          </p>
        </div>

        <div className="time-technique-grid">
          {techniques.map((item) => (
            <article className="time-technique-card time-reveal" key={item.number}>
              <div className="time-technique-top">
                <span className="time-technique-icon">{item.icon}</span>
                <span className="time-technique-number">{item.number}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="time-technique-bottom"></div>
            </article>
          ))}
        </div>
      </section>

      {/* Time Blocking */}
      <section className="time-blocking">
        <div className="time-blocking-image time-reveal">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000"
            alt="Planning tasks in a notebook"
          />
          <div className="time-image-note">
            <span>PLAN YOUR TIME</span>
            <strong>One task at a time.</strong>
          </div>
        </div>

        <div className="time-blocking-content time-reveal">
          <span className="time-section-label">A SIMPLE METHOD</span>
          <h2>Organize Your Day with Time Blocking</h2>
          <p>
            Time blocking is a planning method where you assign specific
            periods to different activities. It helps you stay organized
            and gives every important task its own space.
          </p>

          <div className="time-blocking-steps">
            <div>
              <span>01</span>
              <p><strong>List Your Tasks</strong> Write down everything you need to do.</p>
            </div>
            <div>
              <span>02</span>
              <p><strong>Estimate the Time</strong> Decide how long each activity may take.</p>
            </div>
            <div>
              <span>03</span>
              <p><strong>Create Time Blocks</strong> Assign a time slot to each priority.</p>
            </div>
            <div>
              <span>04</span>
              <p><strong>Review Your Plan</strong> Adjust your schedule when necessary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="time-schedule">
        <div className="time-heading time-reveal">
          <span className="time-section-label">PLAN YOUR DAY</span>
          <h2>A Sample Daily Schedule</h2>
          <p>
            Use this example as a starting point and adjust the timings
            according to your own responsibilities.
          </p>
        </div>

        <div className="time-schedule-list">
          {schedule.map((item, index) => (
            <div className="time-schedule-row time-reveal" key={item.time}>
              <div className="time-schedule-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="time-schedule-time">{item.time}</div>

              <div className="time-schedule-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="time-schedule-type">{item.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="time-mistakes">
        <div className="time-mistakes-content time-reveal">
          <span className="time-section-label">LEARN WHAT TO AVOID</span>
          <h2>Common Time Management Mistakes</h2>
          <p>
            Good time management is not only about planning. It is also
            about recognizing habits that waste your time.
          </p>

          <ul>
            <li>Starting the day without a clear plan.</li>
            <li>Trying to complete too many tasks at once.</li>
            <li>Spending too much time on social media.</li>
            <li>Ignoring breaks and personal well-being.</li>
            <li>Leaving important work until the last minute.</li>
          </ul>
        </div>

        <div className="time-mistakes-image time-reveal">
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=1000"
            alt="Notebook and pen for organizing daily tasks"
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="time-articles">
        <div className="time-articles-heading time-reveal">
          <div>
            <span className="time-section-label">CONTINUE YOUR LEARNING</span>
            <h2>Time Management Articles</h2>
          </div>
          <Link to="/blog" className="time-all-link">
            View All Articles →
          </Link>
        </div>

        <div className="time-article-grid">
          {articles.map((article) => (
            <article className="time-article-card time-reveal" key={article.id}>
              <Link to={`/blog/${article.id}`}>
                <div className="time-article-image">
                  <img src={article.image} alt={article.title} />
                </div>

                <div className="time-article-content">
                  <span>TIME MANAGEMENT</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <strong>Read Article →</strong>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="time-cta time-reveal">
        <span>YOUR TIME. YOUR GOALS. YOUR SUCCESS.</span>
        <h2>Start Managing Your Time Today!</h2>
        <p>
          Make a plan, take action, and turn your valuable time into
          meaningful progress.
        </p>
        <Link to="/blog" className="time-cta-btn">
          Explore More Learning
        </Link>
      </section>

    </main>
  );
}

export default Time;
