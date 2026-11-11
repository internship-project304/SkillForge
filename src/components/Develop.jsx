
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Develop.css";

const careerStrategies = [
  {
    number: "01",
    icon: "🎯",
    title: "Set Clear Career Goals",
    description:
      "Identify what you want to achieve in your professional life. Set realistic short-term and long-term goals to guide your career journey.",
  },
  {
    number: "02",
    icon: "💡",
    title: "Develop New Skills",
    description:
      "Keep improving your technical and communication skills through courses, practice, and real-world projects.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Build Professional Connections",
    description:
      "Connect with people in your industry, share ideas, and learn from professionals who can help you grow.",
  },
  {
    number: "04",
    icon: "📈",
    title: "Track Your Progress",
    description:
      "Review your achievements regularly, identify areas for improvement, and celebrate your professional milestones.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Discover Your Interests",
    description:
      "Understand your strengths, interests, and the type of work you enjoy.",
  },
  {
    step: "02",
    title: "Choose a Career Direction",
    description:
      "Explore career opportunities and select a path that matches your goals.",
  },
  {
    step: "03",
    title: "Learn and Practice",
    description:
      "Build relevant knowledge, take courses, and work on practical projects.",
  },
  {
    step: "04",
    title: "Create Your Professional Profile",
    description:
      "Prepare a strong CV, portfolio, and professional online presence.",
  },
  {
    step: "05",
    title: "Apply and Keep Growing",
    description:
      "Explore opportunities, prepare for interviews, and continue learning.",
  },
];

const careerSkills = [
  {
    icon: "💬",
    title: "Communication",
    description: "Express ideas clearly and communicate confidently with others.",
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    description: "Analyze challenges and find practical solutions.",
  },
  {
    icon: "⏱️",
    title: "Time Management",
    description: "Organize tasks and manage professional responsibilities.",
  },
  {
    icon: "💻",
    title: "Technical Skills",
    description: "Develop the digital and technical abilities your field requires.",
  },
];

const articles = [
  {
    id: 4,
    category: "Career Development",
    title: "How to Build a Successful Career",
    description:
      "Discover practical ways to develop your skills, set goals, and create professional opportunities.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
  },
  {
    id: 6,
    category: "Learning Skills",
    title: "The Importance of Continuous Learning",
    description:
      "Understand why continuous learning helps you stay confident and competitive in your career.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
  },
  {
    id: 3,
    category: "Learning Skills",
    title: "Effective Learning Strategies for Success",
    description:
      "Explore useful learning techniques that help you gain knowledge and improve your abilities.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },
];

function Develop() {
  useEffect(() => {
    const elements = document.querySelectorAll(".career-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("career-visible");
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
    <main className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-content">
          <span className="career-label">CAREER DEVELOPMENT</span>

          <h1>
            Build Your Skills.
            <span> Shape Your Future.</span>
          </h1>

          <p>
            Your career journey starts with a clear vision and a commitment
            to growth. Discover practical guidance to develop your skills,
            achieve your goals, and create new professional opportunities.
          </p>

          <div className="career-hero-buttons">
            <a href="#career-roadmap" className="career-primary-btn">
              Explore Your Career Path
            </a>

            <Link to="/blog" className="career-secondary-btn">
              Read Our Articles
            </Link>
          </div>

          <div className="career-hero-note">
            <span>✓</span> Learn continuously. Grow professionally.
          </div>
        </div>

        <div className="career-hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
            alt="Professionals working together in an office"
          />

          <div className="career-image-card">
            <span>🚀</span>
            <div>
              <strong>Keep Moving Forward</strong>
              <small>Every skill creates an opportunity.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="career-strategies section-space">
        <div className="career-section-heading career-reveal">
          <span className="career-label">GROW WITH PURPOSE</span>
          <h2>Four Steps to Build a Strong Career</h2>
          <p>
            Make meaningful progress by focusing on these important areas
            of professional development.
          </p>
        </div>

        <div className="career-strategy-grid">
          {careerStrategies.map((item) => (
            <article className="career-strategy-card career-reveal" key={item.number}>
              <div className="career-card-top">
                <span className="career-card-icon">{item.icon}</span>
                <span className="career-card-number">{item.number}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="career-skills-section">
        <div className="career-skills-image career-reveal">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000"
            alt="People learning and working together"
          />
        </div>

        <div className="career-skills-content career-reveal">
          <span className="career-label">SKILLS THAT MATTER</span>
          <h2>Develop Skills That Make You Stand Out</h2>
          <p>
            Professional success requires more than qualifications.
            Build a balanced combination of technical knowledge and
            personal skills to become confident and adaptable.
          </p>

          <div className="career-skill-list">
            {careerSkills.map((skill) => (
              <div className="career-skill-item" key={skill.title}>
                <span>{skill.icon}</span>
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section className="career-roadmap section-space" id="career-roadmap">
        <div className="career-section-heading career-reveal">
          <span className="career-label">PLAN YOUR NEXT MOVE</span>
          <h2>Your Career Growth Roadmap</h2>
          <p>
            Follow a practical path to turn your interests into professional
            progress.
          </p>
        </div>

        <div className="career-roadmap-list">
          {roadmap.map((item) => (
            <div className="career-roadmap-item career-reveal" key={item.step}>
              <div className="career-roadmap-number">{item.step}</div>
              <div className="career-roadmap-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Related Articles */}
      <section className="career-articles section-space">
        <div className="career-section-heading career-reveal">
          <span className="career-label">KEEP LEARNING</span>
          <h2>Explore More Career Resources</h2>
          <p>
            Read helpful articles to strengthen your knowledge and support
            your professional development.
          </p>
        </div>

        <div className="career-article-grid">
          {articles.map((article) => (
            <article className="career-article-card career-reveal" key={article.id}>
              <Link to={`/blog/${article.id}`} className="career-article-image">
                <img src={article.image} alt={article.title} />
              </Link>

              <div className="career-article-content">
                <span>{article.category}</span>
                <h3>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <p>{article.description}</p>
                <Link to={`/blog/${article.id}`} className="career-read-more">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="career-cta career-reveal">
        <span className="career-label">YOUR FUTURE STARTS NOW</span>
        <h2>Invest in Yourself. Build Your Future.</h2>
        <p>
          Every new skill, experience, and connection brings you one step
          closer to your professional goals. Start your growth journey today.
        </p>
        <Link to="/blog" className="career-primary-btn">
          Start Learning Today
        </Link>
      </section>
    </main>
  );
}

export default Develop;
