import React from "react";
import Link from "next/link";

const MysqlLayout = ({ children }) => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-2 course-nav">
          <ul>
            <li>
              <Link href="/Courses/mysql/">
                <a>Introduction</a>
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

export default MysqlLayout;
