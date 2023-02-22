import Link from "next/link";

import * as styles from "./Nav.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.navLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/products">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
