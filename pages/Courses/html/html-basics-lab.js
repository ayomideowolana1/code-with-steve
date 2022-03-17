import React from "react";
import HTMLLayout from "../../../layouts/htmlLayout";
import Header from "../../../components/header";

const HTMLBasicsLab = () => {
  return (
    <div className="Content">
      <Header text="HTML Basics Lab" />
      <p>
        <b>Lab ID: 1001</b>
      </p>
      <div>
        <Header text="Objectives" size="md" />
        <ol>
          <li>
            Use what you've learned in the HTML Basics section to create a
            simple web page skeleton
          </li>
          <li>Learn how to do research and read documentation</li>
          <li>Learn how to ask for help if you get stuck</li>
        </ol>
      </div>
      <div>
        <Header text="Overview" size="md" />
        <p>
          The purpose of this lab is for you to implement what you’ve learned in
          the HTML Basics section to build a simple web page.
          <br />The web page must contain the following:
        </p>
        <ol>
          <li>A title (2 marks)</li>
          <li>At least one Level one heading (2 marks)</li>
          <li>At least 2 paragraph with any text of your choice (2 marks)</li>
          <li>At least 1 image in your page (2 marks)</li>
          <li>
            Either an ordered list or an unordered list with 5 list items (2
            marks)
          </li>
        </ol>
      </div>
      <div>
        <Header text="Getting started" size="md" />
        <ol>
          <li>
            Before you begin watch{" "}
            <a href="https://youtu.be/90kC1YLNF3U ">this</a> video that talks
            about the basic structure of a html document to help refresh your
            memory.
          </li>
          <li>
            If you already have a folder on your desktop named codewithsteve
            jump to step 3 if not create the folder.
          </li>
          <li>
            Inside the codewithsteve folder create another folder named Labs.
          </li>
          <li>
            Inside the Labs folder create a file named “lab1001.html”. This is
            the file where you would write your html code for this lab and
            submit when you are done.
          </li>
        </ol>
      </div>
      <div>
        <Header text="Tasks" size="md" />
        <ol>
          <li>
            Create the basic template for your html document (this includes
            DOCTYPE, html,head and body tags)
          </li>
          <li>
            Inside the head tag add a title tag. The document title should be
            “My First HTML Page”
          </li>
          <li>
            Inside the body of the document add a level one header tag (h1) with
            text content “My name is {`<your name>`}”
          </li>
          <li>
            Below the header tag add a paragraph tag and tell us a little bit
            about yourself
          </li>
          <li>
            Next create another level one header tag with text content “Things I
            like”
          </li>
          <li>
            Below the header tag create a ordered or unordered list element and
            add at least 5 list items of things you like.
          </li>
          <li>
            Next add an image tag and with an src attribute that links to an
            image of yourself.{" "}
          </li>
          <li>
            Sumbit your lab
          </li>
        </ol>
      </div>
    </div>
  );
};

HTMLBasicsLab.Layout = HTMLLayout;

export default HTMLBasicsLab;
