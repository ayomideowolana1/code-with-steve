import React from "react";
import styles from "../../styles/courses.module.css";
import Link from "next/link";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Developoment",
      courseList: [
        {
          title: "HTML",
          url: "/html-logo.png",
          path: "/Courses/html",
          id: 1.1
        },
        { title: "CSS", url: "/css-logo.png", path: "/Courses/css", id: 1.2 },
        { title: "Javascript", url: "/js-logo.png", path: "/Courses/js", id: 1.3 }
      ]
    },
    {
      id: 2,
      title: "Web Application Developoment",
      courseList: [
        { title: "PYTHON  (Django framework)", path: "python", id: 2.1 }
      ]
    },
    {
      id: 3,
      title: "Structured Query Language (SQL)",
      courseList: [
        { title: "SQL", path: "sql", id: 3.1 },
        { title: "MYSQL", path: "mysql", id: 3.2 },
        { title: "MONGODB", path: "mongodb", id: 3.3 }
      ]
    }
  ];
  return (
    <div className="courses">
      <div className="container">
        <div className="row">
          {/* intro */}
          <div className="col-12">
            <h1>Free Online Courses</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              aliquam temporibus voluptates veniam possimus velit quas
              consequuntur et tempora ullam eius illum quibusdam, laboriosam
              similique! Ratione minima deserunt sint vero. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Esse deserunt quibusdam
              itaque cumque libero a cum totam quisquam at ea.
            </p>
            <hr />
          </div>
          {/* courses */}
          <div className="col-12">
            <div className="container">
              <div className="row" />
              {courses.map(course => {
                return (
                  <div key={course.id} className="courseSection">
                    <h2>
                      {course.title}
                    </h2>
                    <hr />
                    <div className="container">
                      <div className="row">
                        {course.courseList.map(item => {
                          return <SelectCourse course={item} />;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectCourse = ({ course }) => {
  return <div className={`col-3  ${styles.selectCourseCont}`}>
      <Link href={`${course.path}`}>
        <div className={styles.selectCourse}>
          <div className={styles.img} style={{ backgroundImage: `url(${course.url})` }} />
          <div className={styles.courseTitle}>
            {course.title}
          </div>
        </div>
      </Link>
    </div>;
};

export default Courses;
