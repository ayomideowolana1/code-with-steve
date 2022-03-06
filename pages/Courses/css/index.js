import React from "react";
import CodeExample from "/components/codeExample";
import ActivityBox from "/components/activityBox";
import Header from "/components/header";
import CSSLayout from "../../../layouts/cssLayout";

const Introduction = () => {
  return (
    <div className="Content">
      <h1>Introduction To CSS</h1>
      <hr />
      <div>
        <p>CSS is the language we use to style a Web page. What is CSS?</p>
        <ol>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>
            CSS describes how HTML elements are to be displayed on screen,
            paper, or in other media CSS saves a lot of work.
          </li>
          <li>It can control the layout of multiple web pages all at once</li>
          <li>External stylesheets are stored in CSS files</li>
        </ol>
      </div>
      <div>
        <h3>Why Use CSS?</h3>
        <p>
          CSS is used to define styles for your web pages, including the design,
          layout and variations in display for different devices and screen
          sizes.
        </p>
        <CodeExample
          title="CSS Example"
          code={`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`}
        />
      </div>
    </div>
  );
};

Introduction.Layout = CSSLayout;

export default Introduction;
