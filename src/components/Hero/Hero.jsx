import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anderson Asprilla</h1>
        <p className={styles.description}>
        The creator of <a href="https://www.dsxpert.com" >dsxpert.com</a> and a two-time consecutive Fixed Operations Salesperson of the Year award at an Automotive Dealer company, I have driven significant enhancements in operational efficiency and customer satisfaction through innovative technology. My <a href="https://www.dsxpert.com">custom-developed app</a> has revolutionized our sales process by seamlessly integrating customer data and special order tracking, thereby significantly boosting customer satisfaction.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Resume
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
