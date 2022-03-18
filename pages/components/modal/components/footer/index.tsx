import Image from "next/image";

import check from "../../../../../public/checkout.png";

import style from "./modalFooter.module.css";
export default function ModalFooter() {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <p>TOTAL: $37,50</p>
      </div>
      <button className={style.right}>
        <Image alt="close" src={check} />
      </button>
    </div>
  );
}
