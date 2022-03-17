import React from "react";
import HTMLLayout from "../../../layouts/htmlLayout";
import Header from "../../../components/header";
import CodeExample from "../../../components/codeExample";

const HtmlSyntax = () => {
  return <div className="Content">
      <Header text={"HTML Syntax"} />
      <div>
        <p>
          An HTML element is defined by a start tag, some content, and an end
          tag.
        </p>
        <p>
          The HTML element is everything from the start tag to the end tag:
        </p>
        <p>
          {`<tagname>Content goes here...</tagname>`}
        </p>

        <CodeExample title="Examples of some HTML elements" code={`<h1>My First Heading</h1>
<p>My first paragraph.</p>`} />
      </div>
      <div>
        <Header size="md" text="Anatomy of an HTML element" />
        <ul>
          <li>
            The opening tag: This consists of the name of the element ,
            wrapped in opening and closing angle brackets. This opening tag
            marks where the element begins or starts to take effect.
          </li>
          <li>The content: This is the content of the element.</li>
          <li>
            The closing tag: This is the same as the opening tag, except that
            it includes a forward slash before the element name. This marks
            where the element ends. Failing to include a closing tag is a
            common beginner error that can produce peculiar results.
          </li>
        </ul>
      </div>
      <div>
        <Header size="md" text="Nesting elements" />
        <p>{`Elements can be placed within other elements. This is called nesting. If we wanted to state that our cat is very grumpy, we could wrap the word very in a <strong> element, which means that the word is to have strong(er) text formatting:`}</p>
        <CodeExample title="Nesting a <strong> element inside a <p> element" code={`<p> My cat is <strong> very </strong> grumpy.`} />
        <p>
          There is a right and wrong way to do nesting. In the example above,
          we opened the p element first, then opened the strong element. For
          proper nesting, we should close the strong element first, before
          closing the p.
        </p>
        <div>
          <Header size="sm" text="Right way to do nesting" />
          <pre>{`<p> My cat is <strong> very </strong> grumpy. </p>`}</pre>
          <Header size="sm" text="Wrong way to do nesting" />
          <pre>{`<p> My cat is <strong> very </p> grumpy. </strong>`}</pre>
        </div>
      </div>
      <Header size="md" text="Empty elements" />
      <p>
        Not all elements follow the pattern of an opening tag, content, and a closing tag. Some elements consist of a single tag, which is typically used to insert/embed something in the document. For example, the {"<img>"} element embeds an image file onto a page:
      </p>
      <CodeExample title="Example of an empty element" code={`<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">`} />
    </div>;
};

HtmlSyntax.Layout = HTMLLayout;

export default HtmlSyntax;
