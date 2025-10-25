
import React from "react";
import "./ProjectLists.css";

function Aproject({ project, onBack }) {
  // debug helper — remove later
  // console.log("PROJECT DETAIL", project);

  console.log("DETAIL PROJECT:", project);

  return (
    <div className="project-detail">
      <button className="back-button" onClick={onBack}>
        ⬅ Back to Projects
      </button>

      {project.image && (
        <img src={project.image} alt={project.title} className="detail-image" />
      )}

      <h2 className="detail-title">{project.title}</h2>

      {project.body && (
        <div
          className="detail-body"
          dangerouslySetInnerHTML={{ __html: project.body }}
        />
      )}

      {(project.github || project.deploy) && (
        <div className="project-links detail-links">
          {project.github && typeof project.github === "string" ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code
            </a>
          ) : null}

          {project.deploy && typeof project.deploy === "string" ? (
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Aproject;
