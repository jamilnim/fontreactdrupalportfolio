import React from 'react';
import './ExperienceBox.css';

function ExperienceBox() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "10+", label: "Years in Leadership" },
    { value: "H&M", label: "Nordic Company" },
    { value: "Multi", label: "Cultural Teams" },
    { value: "IT", label: "Strong Tech Base" },
  ];

  return (
    <section className="exp-section">
      <h2 className="exp-title">20+ Years of Global Experience</h2>
      <div className="exp-grid">
        {stats.map((stat, i) => (
          <div key={i} className="exp-box">
            <div className="exp-value">{stat.value}</div>
            <div className="exp-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceBox;
