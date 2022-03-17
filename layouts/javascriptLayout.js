import React from "react";
import Link from "next/link";

const JavascriptLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 course-nav">
          <ul>
            <li>
              <Link href="/Courses/javascript/">
                <a>Introduction</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/javascript/javascript-syntax">
                <a>Javascript Syntax</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-10 course-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default JavascriptLayout;
