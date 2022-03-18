import Image from "next/image";
import ReactDOM from "react-dom";

import close from "../../../public/Close.png";

import ModalHeader from "./components/header/index";
import ModalProduct from "./components/product/index";
import ModalFooter from "./components/footer/index";
import style from "./modal.module.css";

export default function Modal({onClose}: any) {
  const getModalPortal: any = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.top}>
        <button className={style.close} onClick={onClose}>
          <Image alt="close" src={close} />
        </button>
        <ModalHeader />
        <ModalProduct />
        <ModalProduct />
      </div>
      <ModalFooter />
    </div>,
    getModalPortal,
  );
}
