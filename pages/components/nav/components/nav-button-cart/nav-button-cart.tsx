import type {NextComponentType} from "next";
import Image from "next/image";
import {useState} from "react";

import {store} from "../../../../../store";
import Modal from "../../../modal";
import ModalFooter from "../../../modal/components/footer";
import ModalHeader from "../../../modal/components/header";
import ModalProductsContainer from "../../../modal/components/products-container/products-container";
import close from "../../../../../public/Close.png";

import styles from "./nav-button-cart.module.css";

const NavButtonCart: NextComponentType = () => {
  const [showModal, setShowModal] = useState(false);
  const [productsCart, setProductsCart] = useState([]);

  store.subscribe(() => setProductsCart(store.getState()));

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={() => setShowModal(true)}>CART (0)</button>
      {showModal && (
        <Modal>
          <div className={styles.topside}>
            <button className={styles.close} onClick={() => setShowModal(false)}>
              <Image alt="close" src={close} />
            </button>

            <ModalHeader />

            <ModalProductsContainer products={productsCart} />
          </div>
          <ModalFooter products={productsCart} />
        </Modal>
      )}
    </div>
  );
};

export default NavButtonCart;
