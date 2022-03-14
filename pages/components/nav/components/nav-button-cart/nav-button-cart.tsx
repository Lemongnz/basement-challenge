import type {NextComponentType} from "next";
import {useState} from "react";

import Modal from "../../../modal";

import styles from "./nav-button-cart.module.css";

const NavButtonCart: NextComponentType = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={() => setShowModal(true)}>CART (0)</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default NavButtonCart;
