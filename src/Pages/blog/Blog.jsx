import React, { useEffect, useState } from "react";
import "./Blog.css";
import Ablog from "./Ablog";        // ✅ Import detail component
import { fetchArticles } from "../../api/drupalarticle";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);  // ✅ track clicked blog

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch(console.error);
  }, []);

  // ✅ If a blog is selected → show detail (Ablog)
  if (selectedArticle) {
    return (
      <Ablog
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)} // ✅ Back to list
      />
    );
  }

  // ✅ Otherwise show list view
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {articles.map((a) => (
          <div key={a.id} className="blog-card">
            {a.image && (
              <img src={a.image} alt={a.title} className="blog-image" />
            )}
            <div className="blog-content">
              <h3>{a.title}</h3>
              <p>{a.summary}</p>

              <button
                className="blog-button"
                onClick={() => setSelectedArticle(a)} // ✅ Switch to detail
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
