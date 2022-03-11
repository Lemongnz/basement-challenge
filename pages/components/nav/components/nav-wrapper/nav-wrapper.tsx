import type { NextComponentType } from "next";

import styles from "./nav-wrapper.module.css";

const NavWrapper: NextComponentType = ({ children }) => {
  return (
    <div id="nav-wrapper" className={styles.navWrapper}>
      {children}
    </div>
  );
};

export default NavWrapper;
