import React from "react";
import styles from "../styles/homepage.module.css";
import Nav from "/components/nav";

const Homepage = () => {
  return <div>
      <div className={`${styles.hero} container-fluid`}>
        <div className={styles.text}>
          <h1>Want to be a programmer but you don't know where to start?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestias eveniet, quo, nemo tempore fuga asperiores sapiente
            iusto deserunt culpa, ratione quaerat minima a illo corrupti
            incidunt assumenda laborum omnis fugit.
          </p>
          <div className={styles.input}>
            <input placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.infoimg} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <div className={styles.infoimg} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <div className={styles.infoimg} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <div className={styles.infoimg} />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
      <div className={`${styles.features} container-fluid`}>
        <div className="row">
          <div className={`col-12 ${styles.desc}`}>
            <h3>Why Should You Trust Us? </h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolorum sint quam molestiae.
          </div>
        </div>
        <div className={`row ${styles.features}`}>
          <div className={`col-12 col-md-3 m-auto ${styles.feature}`}>
            <div className={`${styles.featureImage} ${styles.learn}`} />
            <div className={styles.featuretext}>
              <h5>Flexible Learning</h5>
              <p>
                Learn from well versed industry experts, at your own pace and
                from the comfort of your home
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-3 m-auto ${styles.feature}`}>
            <div className={`${styles.featureImage} ${styles.path}`} />

            <div className={styles.featuretext}>
              <h5>Follow the right path</h5>
              <p>
                We can take you from begginer to pro withouth the stress of
                not knowing where to go
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-3 m-auto ${styles.feature}`}>
            <div className={`${styles.featureImage} ${styles.skills}`} />

            <div className={styles.featuretext}>
              <h5>High Demand Skills</h5>
              <p>
                Acquire skills in high demand and be one of the devolpers that
                actually stand out
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.rightChoice}`}>
        <div className="row">
          <div className="col-12">
            <h3>Find The Best Courses For You</h3>
          </div>
          <div className="row m-auto">
            <div className={`col-3 ${styles.choice}`}>
              <div>
                <img src="/frontend-illustration.png" />
                <h5>Front End Development</h5>
                <p>
                  Front end development is programming which focuses on the
                  visual elements of a website or app that a user will
                  interact with (the client side).
                </p>
              </div>
            </div>
            <div className={`col-3 ${styles.choice}`}>
              <div>
                <img src="/backend-illustration.png" />
                <h5>Back End Development</h5>
                <p>
                  Back end development refers to the server side of an
                  application and everything that communicates between the
                  database and the browser
                </p>
              </div>
            </div>
            <div className={`col-3 ${styles.choice}`}>
              <div>
                <img src="/fullstack-illustration.png" />
                <h5>Full stack Development</h5>
                <p>
                  Full Stack Developers have to have some skills in a wide
                  variety of coding niches, from databases to graphic design
                  and UI/UX management in order to do their job well.
                </p>
              </div>
            </div>
            <div className={`col-3 ${styles.choice}`}>
              <div>
                <img src="/db-illustration.png" />
                <h5>Database Management</h5>
                <p>
                  Database Development is the name of a sophisticated process
                  of developing and analyzing requirements and objectives in
                  the form of raw data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Homepage;
