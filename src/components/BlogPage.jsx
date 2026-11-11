

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./BlogPage.css";

const articles = [
  {
    id: 1,
    title: "How to Improve Your Daily Productivity",
    category: "Productivity",
    description:
      "Discover simple and effective ways to organize your daily tasks, stay focused, and accomplish more every day.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    imageAlt: "Organized workspace with a laptop and office desk",
    date: "November 5, 2026",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "10 Time Management Tips for Students",
    category: "Time Management",
    description:
      "Learn how to manage your study schedule, avoid distractions, and make better use of your available time.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
    imageAlt: "Student planning study tasks in a notebook",
    date: "November 4, 2026",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Effective Learning Strategies for Success",
    category: "Learning Skills",
    description:
      "Explore learning techniques that help you understand difficult topics, remember information, and improve your skills.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
    imageAlt: "Students learning and studying together",
    date: "November 3, 2026",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "How to Build a Successful Career",
    category: "Career Development",
    description:
      "Explore practical steps for developing professional skills, building confidence, and creating new career opportunities.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
    imageAlt: "Professionals collaborating in a workplace",
    date: "November 2, 2026",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Build Better Habits for a Productive Life",
    category: "Productivity",
    description:
      "Small daily habits can create meaningful changes. Discover how to build routines that support your goals.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900",
    imageAlt: "Person writing daily goals in a notebook",
    date: "November 1, 2026",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "The Importance of Continuous Learning",
    category: "Learning Skills",
    description:
      "Find out why continuous learning matters and how developing new knowledge can support your future.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900",
    imageAlt: "Bookshelves filled with educational books",
    date: "October 30, 2026",
    readTime: "5 min read"
  }
];

const categories = [
  "All",
  "Productivity",
  "Time Management",
  "Learning Skills",
  "Career Development"
];

// Category page links
const categoryLinks = {
  Productivity: "/categories/productivity",
  "Time Management": "/categories/time-management",
  "Learning Skills": "/categories/learning-skills",
  "Career Development": "/categories/career-development"
};

function BlogPage() {

  // SEO title and meta description
  
useSEO(
  "SkillForge Blog | Productivity, Learning & Career Tips",
  "Explore SkillForge articles about daily productivity, time management, effective learning strategies, career development, and building better habits."
);


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" ||
      article.category === selectedCategory;

    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".blog-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("blog-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [searchTerm, selectedCategory]);

  return (
    <main className="blog-page">

      {/* Blog Hero */}
      <section className="blog-hero">

        <div className="blog-hero-content blog-reveal">

          <span className="blog-label">
            SKILLFORGE BLOG
          </span>

          <h1>
            Knowledge That Inspires.
            <span> Ideas That Empower.</span>
          </h1>

          <p>
            Explore helpful articles about productivity, time management,
            learning skills, and career development. Discover new ideas
            and take the next step toward personal growth.
          </p>

          <a href="#all-articles" className="blog-hero-btn">
            Explore Articles →
          </a>

        </div>

        <div className="blog-hero-image blog-reveal">

          <img
            src="https://distancelearning.aru.ac.uk/app/uploads/2019/04/Home-Study-Health-Tips-1.jpg"
            alt="Person studying and learning with a laptop"
            fetchPriority="high"
          />

        </div>

      </section>

      {/* Blog Introduction */}
      <section className="blog-intro blog-reveal">

        <span className="blog-label">
          LEARN SOMETHING NEW
        </span>

        <h2>Explore Our Latest Ideas and Insights</h2>

        <p>
          Find practical advice, useful strategies, and inspiring
          information to help you learn better, work smarter, and
          achieve more.
        </p>

      </section>

      {/* Search and Categories */}
      <section className="blog-controls" id="all-articles">

        <div className="blog-search blog-reveal">

          <input
            type="text"
            placeholder="Search articles by title or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search articles"
          />

          <span aria-hidden="true">⌕</span>

        </div>

        <div className="blog-categories blog-reveal">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* Articles */}
      <section className="blog-articles-section">

        <div className="blog-heading blog-reveal">

          <div>

            <span className="blog-label">
              OUR CONTENT
            </span>

            <h2>
              {selectedCategory === "All"
                ? "Latest Articles"
                : selectedCategory}
            </h2>

          </div>

          <p>{filteredArticles.length} Articles Found</p>

        </div>

        {filteredArticles.length > 0 ? (

          <div className="blog-articles-grid">

            {filteredArticles.map((article, index) => (

              <article
                className="blog-card blog-reveal"
                key={article.id}
                style={{ "--delay": `${index * 0.12}s` }}
              >

                <div className="blog-card-image">

                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                  />

                  <span className="blog-card-category">
                    {article.category}
                  </span>

                </div>

                <div className="blog-card-content">

                  <div className="blog-card-meta">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  {/* Internal link to article */}
                  <Link
                    to={`/blog/${article.id}`}
                    className="blog-read-more"
                  >
                    Read More →
                  </Link>

                  {/* Internal link to related category */}
                  <Link
                    to={categoryLinks[article.category]}
                    className="blog-category-link"
                  >
                    Explore {article.category} →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="blog-no-results">

            <h3>No Articles Found</h3>

            <p>
              Try another search term or select a different category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Show All Articles
            </button>

          </div>

        )}

      </section>

      {/* Internal Category Links */}
      <section className="about-learning">

        <h2>Explore More Learning Topics</h2>

        <p>
          Discover more helpful resources and practical guides
          through our learning categories.
        </p>

        <div className="blog-category-internal-links">

          <Link to="/categories/productivity">
            Productivity →
          </Link>

          <Link to="/categories/time-management">
            Time Management →
          </Link>

          <Link to="/categories/learning-skills">
            Learning Skills →
          </Link>

          <Link to="/categories/career-development">
            Career Development →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default BlogPage;
