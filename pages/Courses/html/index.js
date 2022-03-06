import React from "react";
import CodeExample from "/components/codeExample";
import ActivityBox from "/components/activityBox";
import Header from "/components/header";
import Layout from "../../../layouts/htmlLayout";
import HTMLLayout from "../../../layouts/htmlLayout";

const Introduction = () => {
  return (
    <div className="Content">
      <h1>Introduction To HTML</h1>
      <hr />
      <p>HTML is the standard markup language for creating Web pages.</p>
      <h2>What is HTML?</h2>
      <div>
        <ol>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages </li>
          <li> HTML describes the structure of a Web page </li>
          <li>HTML consists of a series of elements </li>
          <li> HTML elements tell the browser how to display the content </li>
        </ol>
      </div>
      <div>
        <Header text={"A simple HTML Document"} />
        <CodeExample
          title="Basic HTML Template"
          code={`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}
        />
        <div>
          <h3>Code Explained</h3>
          <ol>
            <li>
              {`The <!DOCTYPE html> declaration defines that this document is an HTML5 document`}
            </li>
            <li>
              {`The <html> element is the root element of an HTML page`}
            </li>
            <li>
              {`The <head> element contains meta information about the HTML page`}
            </li>
            <li
            >{`The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)`}</li>
            <li
            >{`The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.`}</li>
            <li>{`The <h1> element defines a large heading`}</li>
            <li>{`The <p> element defines a paragraph`}</li>
          </ol>
        </div>
        <ActivityBox
          message={`Welcome to your first HTML activity box. \nFollow the instructions below to complete the activity section`}
          activities={[
            "Copy the code Above",
            "Create an index.html file",
            "Paste the code in the index.html file",
            "Save the file then double click it to open it in your browser"
          ]}
        />
      </div>
    </div>
  );
};

Introduction.Layout = HTMLLayout

export default Introduction;
