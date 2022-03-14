import Image from "next/image";
import {ReactDOM} from "react";

import yourCart from "../../../public/yourcart.png";

import style from "./modal.module.css";

export default function Modal({onClose}: any) {
  return (
    <div className={style.modal}>
      <button onClick={onClose}>✖</button>
      <Image alt="your cart" src={yourCart} />
    </div>
  );
}

function ModalPortal({onClose}: any) {
  return ReactDOM.createPortal(<Modal>Works</Modal>, document.getElementById("modal-root"));
}
