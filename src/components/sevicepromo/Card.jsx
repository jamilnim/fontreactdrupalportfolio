import React from "react";
import "./Card.css";

const techLogos = [
  "javascript.png",
  "react.png",
  "php.png",
  "laravel.png",
  "nodejs.png",
  "sql.png",
  "drupal.png",
  "wordpress.png",
  "typescript.png",
  "aws.png",
  "ux.png",
  "figma.png",
  "github.png",
  "softwareT.png",
];

function Card() {
  return (
    <>
    <h1>Technial Skill</h1>
    <div className="card-container">
      {/* First Row */}
      <div className="card">
        <div className="logos">
          <span>
            {techLogos.map((logo, index) => (
              <img
                key={`row1-logo1-${index}`}
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
              />
            ))}
          </span>
          <span>
            {techLogos.map((logo, index) => (
              <img
                key={`row1-logo2-${index}`}
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Second Row (reverse direction) */}
      <div className="card">
        <div className="logos reverse">
          <span>
            {techLogos.map((logo, index) => (
              <img
                key={`row2-logo1-${index}`}
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
              />
            ))}
          </span>
          <span>
            {techLogos.map((logo, index) => (
              <img
                key={`row2-logo2-${index}`}
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
