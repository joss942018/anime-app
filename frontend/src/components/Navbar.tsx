import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

// Note: This component is good ✅
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" passHref>
            <div className={styles.navbarLink}>Home</div>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/favorites" passHref>
            <div className={styles.navbarLink}>Favorites</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
