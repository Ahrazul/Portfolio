import React, { useEffect, useState } from "react";
import Menu from "../../Menu/menu";
import "./projects.css";

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  // Array of card data
  const cardData = [
    {
      title: "Field Finder",
      description: "Real-time field finding and player matching website (Click to expand)",
      details: `
        <ul>
          <li>Implemented location-based search and filtering using Google Maps API for field availability.</li>
          <li>Created player matching feature based on skill level and availability using Node.js with MongoDB database.</li>
          <li>Integrated real-time chat functionality for player coordination using Socket.io.</li>
          <li>Managed player statistics and availabilities with MongoDB, allowing players to track performance.</li>
          <li>Built responsive front-end with React and state management using Redux for seamless user experience.</li>
        </ul>
      `
    },
    {
      title: "Pivot",
      description: "Made this as part of my latest coop ",
      details: `
        <ul>
          <li>Developed a human resource management system using React, Express.js, and PostgreSQL, automating leave tracking, attendance, daily stand-up updates, and meeting scheduling for a team of 50+ employees.</li>
          <li>Built a responsive interface with React using Material UI reducing onboarding time by 30%.</li>
          <li>Deployed a PostgreSQL database and integrated it with REST API for user authentication.</li>
        </ul>
      `
    },
    {
      title: "Reader's Realm",
      description: "My first proper full-stack project ",
      details: `
        <ul>
          <li>Created a comprehensive bookstore database using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to manage more than 10,000 book entries and user information.</li>
          <li>Crafted an intuitive and engaging user interface using React, boosting user engagement.</li>
          <li>Created a backend system with Node.js and Express ensuring efficient data handling and server-side management.</li>
      `
    },
    {
      title: "CryptoStride",
      description: "Way too much blockchain for one hackathon ",
      details: `
        <ul>
          <li>Designed an interactive website using React, offering users real-time access to activity statistics and rewards.</li>
          <li>Implemented secure and efficient smart contracts on the Ethereum blockchain using Solidity, ensuring tamper-proof reward transactions for users. </li>
          <li>Engineered a user-friendly iOS app with Swift, enhancing engagement by providing a seamless mobile experience for tracking physical activities.</li>
        </ul>
      `
    },
    {
      title: "Portfolio Website",
      description: "What your seeing right now ",
      details: `
        <ul>
          <li>Some React stuff.</li>
        </ul>
      `
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsContainer = document.getElementById("cards");
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (expandedCard && !document.querySelector(".expanded")?.contains(e.target)) {
        setExpandedCard(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [expandedCard]);

  const handleCardClick = (e, cardIndex) => {
    e.stopPropagation();
    setExpandedCard((prev) => (prev === cardIndex ? null : cardIndex));
  };

  return (
    <div className="wrap">
      <Menu />
      <div id="cards">
        {cardData.map((card, i) => (
          <div
            key={i}
            className={`card ${expandedCard === i ? "expanded" : ""}`}
            onClick={(e) => handleCardClick(e, i)}
          >
            <div className="card-content">
              {/* Hide this part when the card is expanded */}
              {expandedCard !== i && (
                <>
                  <div className="card-image">
                    <i className="fa-duotone fa-apartment"></i>
                  </div>
                  <div className="card-info-wrapper">
                    <div className="card-info">
                      <i className="fa-duotone fa-apartment"></i>
                      <div className="card-info-title">
                        <h3>{card.title}</h3>
                        <h4>{card.description}</h4>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Show this part only when the card is expanded */}
              {expandedCard === i && (
                <div className="card-details">
                  <p dangerouslySetInnerHTML={{ __html: card.details }}></p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
