
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./Learn.css";

const learningMethods = [
  {
    number: "01",
    icon: "🧠",
    title: "Active Learning",
    description:
      "Engage with what you study by asking questions, explaining concepts, and solving practical problems instead of only reading.",
  },
  {
    number: "02",
    icon: "🔁",
    title: "Spaced Repetition",
    description:
      "Review information at gradually increasing intervals to strengthen your memory and remember important concepts longer.",
  },
  {
    number: "03",
    icon: "✍️",
    title: "Effective Note-Taking",
    description:
      "Organize important ideas in your own words so you can understand, revise, and recall information more easily.",
  },
  {
    number: "04",
    icon: "💡",
    title: "Learning by Doing",
    description:
      "Apply your knowledge through exercises, projects, experiments, and real-world activities.",
  },
];

const learningSteps = [
  {
    step: "01",
    title: "Choose a Learning Goal",
    description: "Decide what you want to understand or achieve.",
  },
  {
    step: "02",
    title: "Explore the Topic",
    description: "Read, watch lessons, and collect useful information.",
  },
  {
    step: "03",
    title: "Practice What You Learn",
    description: "Solve exercises and apply new knowledge.",
  },
  {
    step: "04",
    title: "Review and Improve",
    description: "Test your understanding and revisit difficult concepts.",
  },
];

const skills = [
  {
    icon: "📖",
    title: "Reading Skills",
    description:
      "Understand information, identify key ideas, and read with a clear purpose.",
  },
  {
    icon: "📝",
    title: "Writing Skills",
    description:
      "Express your thoughts clearly through organized notes and meaningful writing.",
  },
  {
    icon: "🔍",
    title: "Critical Thinking",
    description:
      "Analyze information, ask questions, and make thoughtful decisions.",
  },
  {
    icon: "💻",
    title: "Digital Learning",
    description:
      "Use online courses, digital tools, and educational resources effectively.",
  },
];

const articles = [
  {
    id: 3,
    title: "Effective Learning Strategies for Success",
    description:
      "Discover useful learning methods that help you understand information and improve your study experience.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
  },
  {
    id: 6,
    title: "The Importance of Continuous Learning",
    description:
      "Explore how developing new knowledge and skills can support your personal and professional growth.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },
  {
    id: 2,
    title: "10 Time Management Tips for Students",
    description:
      "Learn how to organize study sessions and balance your learning activities with everyday responsibilities.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
  },
];

function Learn() {
   useSEO(
    "SkillForge – Learning & Productivity Blog",
    "Explore practical tips about productivity, time management, learning skills, and career development."
  );
  useEffect(() => {
    const elements = document.querySelectorAll(".learning-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("learning-visible");
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
    <main className="learning-page">

      {/* Hero Section */}
      <section className="learning-hero">
        <div className="learning-hero-content">
          <span className="learning-eyebrow">
            SKILLFORGE / LEARNING SKILLS
          </span>

          <h1>
            Learn Smarter.
            <span> Grow Every Day.</span>
          </h1>

          <p>
            Discover effective learning techniques, strengthen your skills,
            and build the confidence to achieve your educational and
            professional goals.
          </p>

          <div className="learning-hero-buttons">
            
            <Link to="/blog" className="learning-secondary-btn">
              Read Learning Articles
            </Link>
          </div>

          <div className="learning-hero-benefit">
            <span>✦</span>
            <p>Knowledge today. Opportunities tomorrow.</p>
          </div>
        </div>

        <div className="learning-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1100"
            alt="Students learning and working together"
          />

          <div className="learning-floating-note">
            <span>YOUR LEARNING JOURNEY</span>
            <strong>Discover. Practice. Improve.</strong>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="learning-intro learning-reveal">
        <span className="learning-section-label">THE POWER OF LEARNING</span>

        <h2>
          Knowledge Begins with
          <span> the Right Approach.</span>
        </h2>

        <p>
          Learning is more than memorizing information. It is the process
          of understanding new ideas, developing useful skills, and
          applying knowledge in everyday situations. The right learning
          strategies can make this journey easier and more effective.
        </p>
      </section>

      {/* Learning Process */}
      <section className="learning-process">
        <div className="learning-process-content learning-reveal">
          <span className="learning-section-label">YOUR LEARNING JOURNEY</span>

          <h2>Turn New Information into Real Knowledge</h2>

          <p>
            Learning becomes more meaningful when you follow a clear
            process. Start with a goal, explore the subject, practice
            regularly, and review your progress.
          </p>

          <div className="learning-process-list">
            {learningSteps.map((item) => (
              <div className="learning-process-item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="learning-process-image learning-reveal">
          <img
            src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=1000"
            alt="Books and study materials"
          />
          <div className="learning-image-caption">
            <strong>Keep Learning</strong>
            <span>Every small step matters.</span>
          </div>
        </div>
      </section>

      {/* Essential Skills */}
      <section className="learning-skills-section">
        <div className="learning-section-heading learning-reveal">
          <span className="learning-section-label">BUILD YOUR ABILITIES</span>
          <h2>Essential Skills for Lifelong Learning</h2>
          <p>
            Develop practical abilities that help you understand
            information, solve problems, and adapt to new opportunities.
          </p>
        </div>

        <div className="learning-skill-grid">
          {skills.map((skill, index) => (
            <article className="learning-skill-card learning-reveal" key={skill.title}>
              <span className="learning-skill-number">
                0{index + 1}
              </span>
              <div className="learning-skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Study Tips */}
      <section className="learning-tips">
        <div className="learning-tips-image learning-reveal">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1000"
            alt="Student studying and taking notes"
          />
        </div>

        <div className="learning-tips-content learning-reveal">
          <span className="learning-section-label">STUDY SMARTER</span>
          <h2>Simple Tips for Better Learning</h2>

          <p>
            You do not need complicated methods to become a better learner.
            Start with these practical habits and improve your learning
            experience step by step.
          </p>

          <ul>
            <li>Set a specific goal before every study session.</li>
            <li>Study in a quiet and comfortable environment.</li>
            <li>Take short breaks between focused sessions.</li>
            <li>Explain difficult concepts in your own words.</li>
            <li>Practice regularly instead of studying only once.</li>
            <li>Review your notes and track your progress.</li>
          </ul>
        </div>
      </section>

      {/* Related Articles */}
      <section className="learning-articles">
        <div className="learning-articles-heading learning-reveal">
          <div>
            <span className="learning-section-label">EXPLORE MORE KNOWLEDGE</span>
            <h2>Latest Learning Articles</h2>
          </div>

          <Link to="/blog" className="learning-view-all">
            View All Articles →
          </Link>
        </div>

        <div className="learning-article-grid">
          {articles.map((article) => (
            <article className="learning-article-card learning-reveal" key={article.id}>
              <Link to={`/blog/${article.id}`}>
                <div className="learning-article-image">
                  <img src={article.image} alt={article.title} />
                </div>

                <div className="learning-article-content">
                  <span>LEARNING SKILLS</span>
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

export default Learn;
