import React from "react";
import Header from "../../../components/header";
import CodExample from "../../../components/codeExample";
import ActivityBox from "../../../components/activityBox";
import JavascriptLayout from "../../../layouts/javascriptLayout";

const Introduction = () => {
  return (
    <div className="Content">
      <Header text="Introduction to Javascript" />
      <div>
        <Header size="md" text="What is Javascript?" />
        <p>
          JavaScript is a scripting or programming language that allows you to
          implement complex features on web pages. Every time a web page does
          something like display static information for you to look at or
          displaying timely content updates, interactive maps, animated 2D/3D
          graphics etc. you can bet that JavaScript is probably involved. It is
          the third layer of the layer cake of standard web technologies, two of
          which are (HTML and CSS).
        </p>

        <Header size="md" text="What can Javascript do?" />
        <p>
          The core client-side JavaScript language consists of some common
          programming features that allow you to do things like:
        </p>
        <ul>
          <li>
            Store useful values inside variables. In the above example for
            instance, we ask for a new name to be entered then store that name
            in a variable called <i>name</i>.
          </li>
          <li>
            Operations on pieces of text (known as "strings" in programming). In
            the next example we take the string "Player 1: " and join it to the
            name variable to create the complete text label, e.g.{" "}
            <i>"Player 1: Chris"</i>.
          </li>
          <li>
            Running code in response to certain events occurring on a web page.
            We used a click event in our example above to detect when the button
            is clicked and then run the code that updates the text label.
          </li>
        </ul>

        <CodExample
          title="Manipulating a string with Javascript "
          code={`let name = "Chris";
let result = "Player 1:" + name;
console.log(result);`}
        />
        <ActivityBox
          activities={[
            "Create a folder on your desktop name it ''javascript'' ",
            "Create an ''index.js'' file inside the folder",
            "Copy the code above, paste in inisde the index.js file and save",
            "Run the index.js file with the command ''node index.js''"
          ]}
        />
      </div>
    </div>
  );
};

Introduction.Layout = JavascriptLayout;

export default Introduction;
