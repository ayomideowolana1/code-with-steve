import React from "react";
import Link  from "next/link";
import Image  from "next/image";
import styles from "../styles/nav.module.css"
const Nav = () => {
  return <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className={styles.nav}>
            <div className={styles.logoCont}>
              <Image src="/logo192.png" className={styles.log} alt="logo" id="logo" width={50} height={50} />
            </div>
            <div className={styles.navlinks}>
              <ul>
                <li>
                  <Link href="/">
                    <a>HOME</a>
                  </Link>
                </li>
                <li>
                  <Link href="/Courses">
                    <a>COURSES</a>
                  </Link>
                </li>
                <li>
                  <Link href="/About">
                    <a>ABOUT</a>
                  </Link>
                </li>
                <li>
                  <Link href="/Contact">
                    <a>CONTACT</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* login / sign up */}
            </div>
          </nav>
        </div>
      </div>
    </div>;
};

export default Nav;
