import React from "react";
import HTMLLayout from "../../../layouts/htmlLayout";
import Header from "../../../components/header";
import CodeExample from "../../../components/codeExample";

const HTMLMetadata = () => {
  return (
    <div className="Content">
      <Header text="Metadata in HTML" />
      <div>
        <p>
          The head of an HTML document is the part that is not displayed in the
          web browser when the page is loaded. It contains information such as
          the page <span className="inline-code">{`<title>`}</span>, links to
          CSS (if you choose to style your HTML content with CSS), links to
          custom favicons, and other{" "}
          <a
            href="https://youtu.be/L0vOg18ncWE"
            title={`Metadata is data about the HTML document, such as the author, \nand important keywords that describe the document. Click to learn more`}
          >
            metadata
          </a>. Web browsers use information contained in the head to render the
          HTML document correctly. In this article we'll cover all of the above
          and more, in order to give you a good basis for working with markup.
        </p>
        <p>
          The HTML head is the contents of the {`<head>`} element. Unlike the
          contents of the {`<body>`} element (which are displayed on the page
          when loaded in a browser), the head's content is not displayed on the
          page. Instead, the head's job is to contain metadata about the
          document. :
        </p>

        <CodeExample
          title="A simple Head tag"
          code={`<head>
  <meta charset="utf-8">
  <title> My test page </title>
</head>`}
        />
        <p>
          In the above example, the head is quite small in larger pages however,
          the head can get quite large.
        </p>
      </div>
      <div>
        <Header size="md" text="HTML <title> tag" />
        <p>
          We've already seen the{" "}
          <span className="inline-code">{`<title>`}</span> element in action —
          this can be used to add a title to the document. This however can get
          confused with the <span className="inline-code">{`<h1>`}</span>{" "}
          element, which is used to add a top level heading to your body content
          — this is also sometimes referred to as the page title. But they are
          different things!
        </p>
        <ul>
          <li>
            The <span className="inline-code">{`<h1>`}</span> element appears on
            the page when loaded in the browser — generally this should be used
            once per page, to mark up the title of your page content (the story
            title, or news headline, or whatever is appropriate to your usage.)
          </li>
          <li>
            The <span className="inline-code">{`<title>`}</span> element is
            metadata that represents the title of the overall HTML document (not
            the document's content.)
          </li>
        </ul>
      </div>
      <div>
         <Header size="md" text="HTML <meta> tag" />
         <p>
             The <span className="inline-code">{`<meat>`}</span> tag defines metadata about an HTML document. Metadata is data (information) about data.

<span className="inline-code">{`<meat>`}</span> tags always go inside the <span className="inline-code">{`<head>`}</span> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.
         </p>
      </div>
    </div>
  );
};

HTMLMetadata.Layout = HTMLLayout;

export default HTMLMetadata;
