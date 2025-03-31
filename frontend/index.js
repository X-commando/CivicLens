import React from "react";
import Link from "next/link";
import styles from "../styles/TitlePage.module.css";

const TitlePage = () => {
  return (
    <div className={styles.container}>
      {/* The background image is set in the CSS */}
      <div className={styles.content}>
        <h1 className={styles.title}>CivicLens</h1>
        <h2 className={styles.subtitle}>a civics + cs community project</h2>
        
        <div className={styles.mapContainer}>
          <InteractiveUSMap />
        </div>
        
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for your state or township..."
            className={styles.searchInput}
          />
        </div>
      </div>
      
      <footer className={styles.footer}>
        Created by [Your Name]
      </footer>
    </div>
  );
};

const InteractiveUSMap = () => {
  // Example state data. Replace or expand with your complete SVG map paths.
  const handleClick = (stateId) => {
    // Redirect to the state selection page, e.g., /state/AL
    window.location.href = `/state/${stateId}`;
  };

  return (
    <svg
      viewBox="0 0 960 600"
      style={{ width: "100%", maxWidth: "800px", height: "auto" }}
    >
      {/* Dummy path for Alabama */}
      <path
        id="AL"
        d="M100,100 L150,100 L150,150 L100,150 Z"
        onClick={() => handleClick("AL")}
        className="state-path"
      />
      {/* Dummy path for Alaska */}
      <path
        id="AK"
        d="M200,200 L250,200 L250,250 L200,250 Z"
        onClick={() => handleClick("AK")}
        className="state-path"
      />
      {/* Add additional state paths here */}
      <style jsx>{`
        .state-path {
          fill: transparent;
          stroke: black;
          stroke-width: 2;
          transition: fill 0.3s, transform 0.3s;
        }
        .state-path:hover {
          fill: blue;
          transform: scale(1.05);
          cursor: pointer;
        }
      `}</style>
    </svg>
  );
};

export default TitlePage;
