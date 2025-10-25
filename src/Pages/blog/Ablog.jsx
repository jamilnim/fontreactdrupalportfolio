import React from "react";
import "./Ablog.css";

function Ablog({ article, onBack }) {

    console.log(article)
  return (
    <div className="ablog-container">
      <button className="back-btn" onClick={onBack}>← Back to Blogs</button>
      <h1 className="ablog-title">{article.title}</h1>

      {article.image && (
        <img src={article.image} alt={article.title} className="ablog-image" />
      )}

      <div
        className="ablog-body"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </div>
  );
}

export default Ablog;
