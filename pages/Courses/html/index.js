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
      <Header size="md" text="What is HTML?" />
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
        <Header size="md" text={"Anatomy of an HTML document"} />
        <p>
          Individual HTML elements aren't very useful on their own. Let's
          examine how individual elements combine to form an entire HTML page:
        </p>
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
          <Header size="md" text="Code Explained" />
          <ol>
            <li>
              <span className="inline-code">{`<!DOCTYPE html>`}</span>
              declaration defines that this document is an HTML5 document
            </li>
            <li>
              <span className="inline-code">{`<html></html>`}</span> is the
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
                title={`The <html> element is referred to as the root element. All other \nelements must be descendants of this element. Click to read more`}
                target="_blank"
              >
                root element
              </a>{" "}
              of an HTML page
            </li>
            <li>
              <span className="inline-code">{`<title></title>`}</span> this sets
              the title of the page, which is the title that appears in the
              browser tab the page is loaded in. The page title is also used to
              describe the page when it is bookmarked.
            </li>
            <li>
              <span className="inline-code">{`<body></body>`}</span> this
              contains all the content that displays on the page, including
              text, images, videos, games, playable audio tracks, or whatever
              else.
            </li>
            <li>
              <span className="inline-code">{`<h1></h1>`}</span> defines a large
              heading
            </li>
            <li>
              <span className="inline-code">{`<p></p>`}</span> defines a
              paragraph
            </li>
            <Header size="md" text="Code Explained" />
          </ol>
          <Header size="md" text="HTML comments" />
          <p>
            HTML has a mechanism to write comments in the code. Browsers ignore
            comments, effectively making comments invisible to the user. The
            purpose of comments is to allow you to include notes in the code to
            explain your logic or coding. This is very useful if you return to a
            code base after being away for long enough that you don't completely
            remember it. Likewise, comments are invaluable as different people
            are making changes and updates.
          </p>
          <p>
            An HTML comment looks like this{" "}
            <span className="inline-code">{`<!--`}</span> content goes here{" "}
            <span className="inline-code">{`-->`}</span>{" "}
          </p>
        </div>

        <ActivityBox
          message={
            "Welcome to your first HTML activity box. \n These activity boxes were designed to be followed in the order in which they are created. Skipping one activity box could cause you to experience problems with future activity boxes. "
          }
          activities={[
            "On your desktop create a folder named ''codewithsteve'' this will be the root folder for all the activities you will have in this course.",
            "Inside the root folder (''codewithsteve'') create another folder named ''html''",
            "Inside the html folder create a file named ''index.html''",
            "Open the index.html file in your IDE then copy the code example above, paste it and then save the changes",
            "Double click the file to open it in your browser",
            "Congratulations you just created your first html document"
          ]}
        />
      </div>
    </div>
  );
};

Introduction.Layout = HTMLLayout;

export default Introduction;
