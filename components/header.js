import React from "react";
import styles from "/styles/header.module.css";

const Header = ({ text, size }) => {
  switch (size) {
    case "sm":
      return (
        <div className={styles.header}>
          <h5>
            {text}
          </h5>
        </div>
      );
      break;
    case "md":
      return (
        <div className={styles.header}>
          <h3>
            {text}
          </h3>
        </div>
      );
      break;
    default:
      return (
        <div className={styles.header}>
          <h1>
            {text}
          </h1>
          <hr />
        </div>
      );
  }
};

export default Header;
