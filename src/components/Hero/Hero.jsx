import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anderson Asprilla</h1>
        <p className={styles.description}>
        A two-time Fixed Operations Salesperson of the Year (2022, 2023) at an Automotive Dealer company, I've enhanced operational efficiency and customer satisfaction through innovative technology. My custom-developed app revolutionized our sales process by seamlessly integrating customer data and special order tracking, significantly boosting customer satisfaction.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/stars.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
