import type {NextComponentType} from "next";

import styles from "./nav-wrapper.module.css";

const NavWrapper: NextComponentType = ({children}) => {
  return (
    <div className={styles.navWrapper} id="nav-wrapper">
      {children}
    </div>
  );
};

export default NavWrapper;
