import React from "react";
import styles from "/styles/codeExample.module.css";

const CodeExample = ({ title, code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Copied code to clipboard");
  };
  return (
    <div className={styles.codeExample}>
      {/* <h3>Example</h3> */}
      <div className={styles.codeExampleHeader}>
        {title}
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div className={styles.codeExampleBody}>
        <pre>
          {code}
        </pre>
      </div>
    </div>
  );
};

export default CodeExample;

