import React from "react";
import Header from "../../../components/header";
import CSSLayout from "../../../layouts/cssLayout";
import CodeExample from "../../../components/codeExample";

const CSSSyntax = () => {
  return <div className="Content">
      <Header text="CSS Syntax" />
      <p>A CSS rule consists of a selector and a declaration block.</p>

      <ol>
        <li>The selector points to the HTML element you want to style.</li>
        <li>
          The declaration block contains one or more declarations separated by
          semicolons
        </li>
        <li>
          Each declaration includes a CSS property name and a value, separated
          by a colon.
        </li>
        <li>
          Multiple CSS declarations are separated with semicolons, and
          declaration blocks are surrounded by curly braces.
        </li>
      </ol>
      <CodeExample title={"CSS Syntax Example"} code={`h1{
    color:red;
    text-align:center;
}`} />
      <div>
        <h3>Example Explained</h3>
        <ul>
          <li>
            h1 is a selector in CSS {"(it points to the HTML element you want to style: <h1>)"}.
          </li>
          <li>color is a property, and red is the property value</li>
          <li>text-align is a property, and center is the property value</li>
        </ul>
      </div>
    </div>;
};

CSSSyntax.Layout = CSSLayout;

export default CSSSyntax;
