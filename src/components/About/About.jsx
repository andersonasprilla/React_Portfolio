import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="My Profile Picture"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I specialize in creating dynamic and user-friendly web applications using React. . My approach integrates responsive design principles and modern JavaScript frameworks to deliver seamless user experiences. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Experience in building robust and scalable web applications using Node.js. My expertise includes working with Express.js to streamline the development of server-side applications and integrating databases like MongoDB and PostgreSQL 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I specialize in crafting visually appealing and user-centered interfaces.My proficiency in Figma enables me to create high-fidelity prototypes and dynamic design systems that ensure consistency and scalability across all platforms.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
