import React, { useState, useEffect } from "react";
import "./RecommendationCarousel.css";
import devorimg from "../../assets/recomendpic/devor.jpeg";
import grace from "../../assets/recomendpic/grace.jpeg";
import farshad from "../../assets/recomendpic/farshad.jpeg";

const recommendations = [
  {
    name: "Davor Brecic",
    image: devorimg,
    text: "Have pleasure to know Jamil from 2005. Jamil has very good learning and adapting skill, He has the commendable capability to manage any team independently. His way of communication is very motivational and inspiring. The most important thing that I can’t ignore, he is a very good follower, he can carry out anything with minimum instruction.",
    More: "https://www.linkedin.com/in/muhammad-jamil-1a7a6864/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Hongmei (Grace) Cai",
    image: grace,
    text: "Jamil is a perfectionist, always aiming high on everything he does. He is one of the few in my team have the ability to lead projects, which can utilize his strength: analytical thinking, quick learning, self-driven. I am sure he will keep developing himself and have great achievement!",
    More: "https://www.linkedin.com/in/muhammad-jamil-1a7a6864/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Farshad Shadid, CSCA™",
    image: farshad,
    text: "An excellent teammate and mentor. Mature and positive, agile to take positive risks and has great control over work area. Creative and innovative to present new things and things in new way and possess a wide range of outside knowledge. Supportive and encouraging to his team members. Overall, a great person to work with. 🙂",
    More: "https://www.linkedin.com/in/muhammad-jamil-1a7a6864/details/recommendations/?detailScreenTabIndex=0",
  },
];

function RecommendationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === recommendations.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
    <section id="recomendation">
      <div className="recomentationContainer">
        <h1 className="recomendationHeading">Recomendation</h1>
        <div className="carousel-container">
          <div className="recommendationCard">
            <div className="recmendData">
              <img
                src={recommendations[currentIndex].image}
                alt={recommendations[currentIndex].name}
                className="card-img"
              />
              <h3>{recommendations[currentIndex].name}</h3>

              <p className="text">{recommendations[currentIndex].text}</p>
              <a
                href={recommendations[currentIndex].More}
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </div>
          </div>
          <button className="nav-btn left" onClick={handlePrev}>
            ◀️
          </button>{" "}
          <br />
          <button className="nav-btn right" onClick={handleNext}>
            ▶️
          </button>
        </div>
      </div>
      </section>
    </>
  );
}

export default RecommendationCarousel;
