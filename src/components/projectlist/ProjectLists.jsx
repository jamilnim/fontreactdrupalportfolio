import React, { useEffect, useState } from "react";
import "./ProjectLists.css";
import Aproject from "./Aproject"; // Detail component
import { fetchProjects } from "../../api/drupal";

export default function ProjectLists() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  // Show detail page if a project is selected
  if (selectedProject) {
    return (
      <Aproject
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  // Show project list
  return (
    <div className="projects-page">
      <h1 className="projectHeading" id="project">Projects</h1>
      <div className="projectContainer">
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.id} className="project-card">
              {p.image && (
                <img src={p.image} alt={p.title} className="project-image" />
              )}

              <h3>{p.title}</h3>

              {p.summary && (
                <p
                  className="project-summary"
                  dangerouslySetInnerHTML={{ __html: p.summary }}
                />
              )}

              <div className="project-links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code
                  </a>
                )}
                {p.deploy && (
                  <a
                    href={p.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              <button
                className="project-button"
                onClick={() => setSelectedProject(p)}
              >
                Show More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
