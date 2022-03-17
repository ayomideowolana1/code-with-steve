import React from "react";
import Link from "next/link";
import Header from "../components/header";

const HTMLLayout = ({ children }) => {
  return <div className="container-fluid">
      <div className="row">
        <div className="col-2 course-nav">
          <Header size="sm" text="HTML Basics " />
          <ul>
            <li>
              <Link href="/Courses/html/">
                <a>Introduction</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-attributes">
                <a>HTML Attributes</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-metadata">
                <a>Metadata in HTML</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-basics-lab">
                <a>HTML Basics Lab</a>
              </Link>
            </li>
          </ul>
          <Header size="sm" text="HTML Links " />
          <ul>

            <li>
              <Link href="/Courses/html/html-links">
                <a>HTML Links</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
            <li>
              <Link href="/Courses/html/html-syntax">
                <a>HTML Syntax</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-10 course-body">
          {children}
        </div>
      </div>
    </div>;
};

export default HTMLLayout;
