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
          alt="Avatar sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/data_eng_icon.png")} alt="Data Eng icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering</h3>
              <p>
              I have experience in ETL pipeline development, data integration, and system optimization, and a strong focus on collaboration and process automation to enhance data reliability and efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/full_stack_icon.png")} alt="Full Stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Development</h3>
              <p>
              I have experience as a Full Stack Developer, contributing to database design, API management, and front-end development while leveraging collaboration and agile methodologies to build scalable and efficient solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/qa_eng_icon.png")} alt="QA Eng icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance Engineering</h3>
              <p>
              My experience in the QA Engineering role includes writing and executing  unit tests, ensuring software reliability, functionality, and adherence to engineering best practices
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
