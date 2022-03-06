import React from "react";
import styles from "/styles/header.module.css";

const Header = ({ text }) => {
  return (
    <div className={styles.header}>
      <h1>
        {text}
      </h1>
      <hr />
    </div>
  );
};

export default Header;
