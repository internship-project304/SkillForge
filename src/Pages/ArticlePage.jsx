

import React from "react";
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";
import useSEO from "../hooks/useSEO";
import "./ArticlePage.css";

function ArticlePage() {
  const { id } = useParams();

  const article = articles.find(
    (item) => String(item.id) === String(id)
  );

  // Show message if article does not exist
  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article Not Found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  // SEO title and description for the selected article
  useSEO(
    `${article.title} | SkillForge`,
    article.description
  );

  return (
    <main className="simple-article-page">

      <div className="simple-article-container">

        <Link to="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>

        <div className="simple-article-header">

          <span className="simple-article-category">
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <p className="simple-article-intro">
            {article.description}
          </p>

          <div className="simple-article-meta">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>

        </div>

        <div className="simple-article-gallery">

          {article.images.map((img, index) => (
            <div className="simple-image-card" key={index}>

              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />

              <div className="simple-image-info">
                <h3>{img.alt}</h3>
                <p>{img.description}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}

export default ArticlePage;
