import React from "react";
import CodeExample from "/components/codeExample";
import ActivityBox from "/components/activityBox";
import Header from "/components/header";
import PythonLayout from "../../../layouts/pythonLayout";

const Introduction = () => {
  return (
    <div className="Content">
      <Header text="Python Introduction" />
      <div>
        <Header text="What is Python?" size="md" />
        <p>
          Python is a popular programming language. It was created by Guido van
          Rossum, and released in 1991.
        </p>
        <p>It is used for:</p>
        <ul>
          <li>Web development (server-side)</li>
          <li>Software development</li>
          <li>Mathematics, system scripting.</li>
        </ul>
      </div>
      <div>
        <Header size="md" text="What can Python do?" />
        <ul>
          <li>Python can be used on a server to create web applications.</li>
          <li>Python can be used alongside software to create workflows.</li>
          <li>Python can connect to database systems.</li>
          <li>It can also read and modify files.</li>
          <li>
            Python can be used to handle big data and perform complex
            mathematics.
          </li>
          <li>
            Python can be used for rapid prototyping, or for production-ready
            software development.
          </li>
        </ul>
      </div>
      <div>
        <Header size="sm" text="Why Python?" />
        <ul>
          <li>
            Python works on different platforms (Windows, Mac, Linux, Raspberry
            Pi, etc).
          </li>
          <li>Python has a simple syntax similar to the English language.</li>
          <li>
            Python has syntax that allows developers to write programs with
            fewer lines than some other programming languages.
          </li>
          <li>
            Python runs on an interpreter system, meaning that code can be
            executed as soon as it is written.This means that prototyping can be
            very quick.
          </li>
          <li>
            Python can be treated in a procedural way, an object-oriented way or
            a functional way.
          </li>
        </ul>
      </div>
      <div>
        <Header
          size="md"
          text="Python Syntax compared to other programming languages "
        />
        <ul>
          <li>
            Python was designed for readability, and has some similarities to
            the English language with influence from mathematics.
          </li>
          <li>
            Python uses new lines to complete a command, as opposed to other
            programming languages which often use semicolons or parentheses.
          </li>
          <li>
            Python relies on indentation, using whitespace, to define scope;
            such as the scope of loops, functions and classes.
          </li>
          <li>
            Other programming languages often use curly-brackets for this
            purpose.
          </li>
        </ul>
      </div>
      <CodeExample title="Python Syntax" code={`print("Hello, World!")`} />
      <ActivityBox title="Sim" activities={["Create a file named ''hello.py''","Copy the code above then paste and save in the file","Save the file and execute it"]}/>
    </div>
  );
};

Introduction.Layout = PythonLayout;

export default Introduction;
