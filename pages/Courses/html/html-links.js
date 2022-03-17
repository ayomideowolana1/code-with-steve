import React from "react";
import Header from "../../../components/header";
import codeExample from "../../../components/codeExample";
import ActivityBox from "../../../components/activityBox";
import HTMLLayout from "../../../layouts/htmlLayout";
import CodeExample from "../../../components/codeExample";

const HTMLLinks = () => {
  return (
    <div className="Content">
      <Header text="dksjfkdsbs" size="md" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum
        officia sint accusamus placeat iusto necessitatibus fuga molestiae iure
        est.
      </p>
      <ActivityBox
        message="saass assafs ffa"
        activities={["dsfsdssd", "dasdasad", "asdsads"]}
      />
      <CodeExample
        title="SZDd"
        code={`<div></div>
            `}
      />
    </div>
  );
};
HTMLLinks.Layout = HTMLLayout;
export default HTMLLinks;
