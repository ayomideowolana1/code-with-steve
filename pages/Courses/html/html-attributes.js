import React from "react";
import Header from "../../../components/header";
import codeExample from "../../../components/codeExample";
import ActivityBox from "../../../components/activityBox";
import HTMLLayout from "../../../layouts/htmlLayout";
import CodeExample from "../../../components/codeExample";

const HTMLAttributes = () => {
  return <div className="Content">
      <Header text="HTML Attribues" />
      <div>
        <p>
          HTML attributes provide additional information about HTML elements
          that won't appear in the content.
        </p>
        <CodeExample title="HTML attribute example" code={`<a href="https://www.google.com/"> click me </a>`} />
        <p>An attribute should have:</p>
        <ul>
          <li>
            A space between it and the element name. (For an element with more
            than one attribute, the attributes should be separated by spaces
            too.)
          </li>
          <li>The attribute name, followed by an equal sign.</li>
          <li>
            An attribute value, wrapped with opening and closing quote marks.
          </li>
        </ul>
        <div>
          <Header size="md" text="Adding attributes to Elements" />
          <p>
            Let's take a look at the {`<a>`} tag. This stands for anchor. An anchor can make the text it encloses into a hyperlink. Anchors can take a number of attributes, but several are as follows:
          </p>
          <ul>
            <li>
              href: This attribute's value specifies the web address for the
              link. For example: href="https://www.codewithsteve.com".
            </li>
            <li>
              title: The title attribute specifies extra information about the
              link, such as a description of the page that is being linked to.
              For example, title="The Mozilla homepage". This appears as a
              tooltip when a cursor hovers over the element.
            </li>
            <li>
              target: The target attribute specifies the browsing context used
              to display the link. For example, target="_blank" will display
              the link in a new tab. If you want to display the linked content
              in the current tab, just omit this attribute.
            </li>
          </ul>
          <CodeExample title="<a> tag with multiple attributes" code={`<a href="https://www.codewithsteve.com" title="Code With Steve" target="_blank" >Click me!</a>`} />
        </div>
        <div>
          <Header text="HTML Core attributes" />
          <p>
            The four core attributes that can be used on the majority of HTML
            elements (although not all) are:
          </p>
          <ul>
            <li>id </li>
            <li> style</li>
            <li>title</li>
            <li>class</li>
          </ul>
        </div>
        <div>
          <Header text="The id attribute" size="md" />
          <p>
            The id attribute of an HTML tag can be used to uniquely identify
            any element within an HTML page. There are two primary reasons
            that you might want to use an id attribute on an element
          </p>
          <ol>
            <li>
              If an element carries an id attribute as a unique identifier, it
              is possible to identify just that element and its content.
            </li>
            <li>
              If you have two elements of the same name within a Web page (or
              style sheet), you can use the id attribute to distinguish
              between elements that have the same name.
            </li>
            <p>
              We will discuss style sheet in separate tutorial. For now, let's
              use the id attribute to distinguish between two paragraph
              elements as shown below.
            </p>
          </ol>
          <CodeExample title="Two <p> elements with different id attributes" code={`<p id = "html">This para explains what is HTML</p>
<p id = "css">This para explains what is Cascading Style Sheet</p>`} />
        </div>
        <div>
          <Header size="md" text="The title attribute" />
          The title attribute gives a suggested title for the element. They syntax for the title attribute is similar as explained for id attribute. The behavior of this attribute will depend upon the element that carries it, although it is often displayed as a tooltip when cursor comes over the element or while the element is loading.
          <CodeExample title="An <a> element with a href and title attribute" code={`<a href="" title="Click here to learn more">Click me</a>`} />
        </div>
        <div>
          <Header size="md" text="The class attribute" />
          <p>
            The class attribute is used to associate an element with a style
            sheet, and specifies the class of element. You will learn more
            about the use of the class attribute when you will learn Cascading
            Style Sheet (CSS). So for now you can avoid it. The value of the
            attribute may also be a space-separated list of class names.
          </p>
          <CodeExample title="A <h1> element with two classes" code={`<h1 class="header header-primary"> Title </h1>`} />
        </div>
        <div>
          <Header size="md" text="The style attribute" />
          <p>
            The style attribute allows you to specify Cascading Style Sheet
            (CSS) rules within the element.
          </p>
          <CodeExample title="A <p> element with a style attribute" code={`<p style="color:white; background:green:"> Hello there </p>`} />
        </div>
        <div>
          <Header size="md" text="Boolean attributes" />
          <p>
            Sometimes you will see attributes written without values. This is entirely acceptable. These are called <a href="https://www.computerhope.com/jargon/b/boolean.htm" target="_blank" title={`In computer science, the Boolean data type is a data type \nthat has one of two possible values which can be true or false. \nClick to read more`}>
              Boolean
            </a> attributes. Boolean attributes can only have one value, which is generally the same as the attribute name. For example, consider the disabled attribute, which you can assign to form input elements. (You use this to disable the form input elements so the user can't make entries. The disabled elements typically have a grayed-out appearance.) For example:
          </p>
          <CodeExample title="Input element attributes" code={`<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled="disabled">

<!-- You can also use a shorthand value like so-->
<input type="text" disabled>

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text">`} />
          <p>
            It is best to always put your attribute values inside quotes (you
            can use single or double quotes).
          </p>
        </div>
      </div>
    </div>;
};

HTMLAttributes.Layout = HTMLLayout;
export default HTMLAttributes;
