import React from "react";
import HTMLLayout from "../../../layouts/htmlLayout";
import Header from "../../../components/header";

const HtmlSyntax = () => {
  return (
    <div className="Content">
      <Header text={"HTML Syntax"} />
      <p>
        An HTML element is defined by a start tag, some content, and an end tag.
      </p>
      <p>The HTML element is everything from the start tag to the end tag:</p>
      <p>
        {`<tagname>Content goes here...</tagname>`}
      </p>
      <p>Examples of some HTML elements:</p>
      <p>
        {`<h1>My First Heading</h1>`}
      </p>
      <p>
        {`<p>My first paragraph.</p>`}
      </p>
      <div />
      <div>
        <h3>Nested HTML Elements</h3>
        HTML elements can be nested (this means that elements can contain other
        elements).
        <p>All HTML documents consist of nested HTML elements.</p>
        <p>{`The following example contains four HTML elements (<html>, <body>, <h1> and <p>):`}</p>
      </div>
    </div>
  );
};

HtmlSyntax.Layout = HTMLLayout;

export default HtmlSyntax;
