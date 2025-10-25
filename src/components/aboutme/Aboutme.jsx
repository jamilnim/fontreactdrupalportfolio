import React from "react";

import "./Aboutme.css";
import Button from "./Button";

function JobTimeline() {
  return (
    <>
    <section id="aboutme">
      <div className="aboutmeHeading" id="aboutme"> About me</div>

      <div className="container">
        <div className="sideButton">
          <Button />
        </div>

        <div className="aboutmeContent">
          <p>
            <strong>
              Full Stack Developer | JavaScript | React.js | Node.js | SQL |
              Cloud
            </strong>{" "}
            <br />
            Highly motivated and results-driven Full Stack Developer with strong
            expertise in JavaScript, React.js, Node.js, and SQL, and hands-on
            experience in designing, developing, and deploying scalable web
            applications. Skilled in building both frontend and backend
            solutions, optimizing system performance, and delivering seamless
            user experiences across platforms. <br /> <br />
            Proficient in modern frameworks and libraries, RESTful APIs, and
            database management, with knowledge of cloud platforms such as AWS
            and Azure. Adept at writing clean, maintainable code, implementing
            secure architectures, and integrating third-party services to
            deliver end-to-end solutions. <br /> <br />
            Proven ability to work in agile development environments,
            collaborating with cross-functional teams including designers,
            testers, and product managers to bring innovative ideas to life.
            Experienced in project leadership, code reviews, version control
            (Git/GitHub), and continuous integration/deployment pipelines.{" "}
            <br /> <br />
            Recognized for strong problem-solving skills, adaptability, and
            attention to detail, with a passion for emerging technologies such
            as microservices, containerization (Docker), and cloud-native
            applications. Enthusiastic about continuous learning and applying
            modern practices to build efficient, user-centric, and future-ready
            web solutions. <br />
          </p>
        </div>
      </div>
      </section>
    </>
  );
}

export default JobTimeline;
