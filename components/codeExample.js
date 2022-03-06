import React from "react";
import styles from "/styles/codeExample.module.css";

const CodeExample = ({ title, code }) => {
  return <div className={styles.codeExample}>
      <h3>Example</h3>
      <div className={styles.codeExampleHeader}>
        {title}
        <button>Copy</button>
      </div>
      <div className={styles.codeExampleBody}>
        <pre>
          {code}
        </pre>
      </div>
    </div>;
};

export default CodeExample;
