import React from "react";
import styles from "../styles/homepage.module.css";
import Nav from "/components/nav";

const Homepage = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.blur}>
          <div>
            <h1>Want to be a programmer but you don't know where to start?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias eveniet, quo, nemo tempore fuga asperiores sapiente
              iusto deserunt culpa, ratione quaerat minima a illo corrupti
              incidunt assumenda laborum omnis fugit.
            </p>
              <a href="#">Learn more</a>
          </div>
        </div>
      </div>
      <div className={`${styles.features} container-fluid`}>
        <div className="row">
          <div className={`col-12 ${styles.desc}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dolorum sint quam molestiae, doloribus asperiores voluptatibus animi
            est numquam ea, tempore aliquid et non fugiat, iure vitae mollitia
            eligendi sed.
          </div>
        </div>
        <div className={`row ${styles.features}`}>
          <div className={`col-12 col-md-3 m-auto ${styles.feature}`}>
            <div className={`${styles.featureImage} ${styles.learn}`} />
            <div className={styles.text}>
              <h4>Flexible Learning</h4>
              <p>
                Learn from well versed industry experts, at your own pace and
                from the comfort of your home
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-3 m-auto ${styles.feature}`}>
            <div className={`${styles.featureImage} ${styles.path}`} />

            <div className={styles.text}>
              <h4>Follow the right path</h4>
              <p>
                We can take you from begginer to pro withouth the stress of not
                knowing where to go
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-3 m-auto ${styles.feature}`}>
            <div className={`${styles.featureImage} ${styles.skills}`} />

            <div className={styles.text}>
              <h4>High Demand Skills</h4>
              <p>
                Acquire skills in high demand and be one of the devolpers that
                actually stand out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
