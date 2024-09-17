import React, { useEffect, useState } from "react";
import Menu from "../../Menu/menu";
import './experience.css'

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  // Array of card data
  const cardData = [
    {
      title: "Spectrum Software Services",
      description: "Software Engineering Intern (Click to expand)",
      details: `
        <ul>
          <li>Developed a human resource management system using React, Express.js, and PostgreSQL, automating leave tracking, attendance, daily stand-up updates, and meeting scheduling for a team of 50+ employees.</li>
          <li>Built a responsive interface with React using Material UI reducing onboarding time by 30%.</li>
          <li>Optimized SQL queries through table indexing and query refactoring, improving data retrieval speed by 30%.</li>
          <li>Designed tests in Postman and created error handlers in Node.js to automate 25% of the API operations.</li>
        </ul>
      `
    },
    {
      title: "Dundas Life",
      description: "Marketing Data Analyst Intern",
      details: `
        <ul>
          <li>Conducted in-depth market analysis to identify key trends, resulting in a 30% improvement in targeted marketing.</li>
          <li>Conducted competitive analysis using VidIQ and YouTube Analytics and generated 10+ marketing leads.</li>
          <li>Spearheaded multiple marketing campaigns, leading to a 25% increase in brand awareness.</li>
      `
    },
    {
      title: "UW students' association",
      description: "Software Developer",
      details: `
        <ul>
          <li>Created cross-platform mobile app using React Native, increasing users by 40% and user retention by 70%.</li>
          <li>Developed REST API using Node.js and Express for managing prayer times and event schedules.</li>
          <li>Updated the team website built using React, Express and PostgreSQL, on a regular basis.</li>
      `
    },
    {
      title: "UW Orphan Sponsorship Program",
      description: "Technical Lead",
      details: `
        <ul>
          <li>Leveraged CSS, HTML, JavaScript, and Shopify’s Liquid templating language to develop multiple webpages.</li>
          <li>Applied Shopify Analytics to enhance website performance, implementing data-driven strategies to streamline user experience, notably reducing clicks to reach the donations page.</li>
          <li> Led and motivated a diverse tech team, successfully completing all website-related projects 15% ahead of schedule.</li>
      `
    },
    {
      title: "UW Formula Electric Motorsports",
      description: "Firmware Team Member",
      details: `
        <ul>
          <li>Performed Hardware in the Loop testing to validate the integration of C programs with hardware components.</li>
          <li>Created unit tests and Bash scripts, ensuring better software validation and improving test coverage by 25%.</li>
          <li>Identified memory access errors, such as memory leaks using Valgrind and used GDB for targeted code debugging.</li>
      `
    }
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