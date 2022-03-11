import type { NextComponentType } from "next";

import styles from "./nav-button-cart.module.css";

const NavButtonCart: NextComponentType = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button>CART (0)</button>
    </div>
  );
};

export default NavButtonCart;
