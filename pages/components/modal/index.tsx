import Image from "next/image";
import ReactDOM from "react-dom";

import yourCart from "../../../public/yourcart.png";

import style from "./modal.module.css";

export default function Modal({onClose}: any) {
  const getModalPortal: any = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div className={style.modal}>
      <button onClick={onClose}>✖</button>
      <Image alt="your cart" src={yourCart} />
    </div>,
    getModalPortal,
  );
}
