import React from "react";
import Link from "next/link";
import {useRouter} from "next/router"
import Image from "next/image";
import styles from "../styles/nav.module.css";
const Nav = () => {
  const router= useRouter()
  const links = [
    { text: "HOME", path: "/" },
    { text: "COURSES", path: "/Courses" },
    { text: "BLOG", path: "/Blog" },
    { text: "ABOUT", path: "/About" },
  ];
  return <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className={styles.nav}>
            <div className={styles.logoCont}>
              <Image src="/cws-logo-landscape.png" className={styles.log} alt="logo" id="logo" width={200} height={60} />
            </div>
            <div className={styles.navlinks}>
              <ul>
                {links.map(link => <li>
                    <Link href={link.path}>
                      <a className={router.pathname===link.path ? styles.navlinkActive : "" }>
                        {link.text}
                      </a>
                    </Link>
                  </li>)}
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
