import Image from "next/image";

import yourcart from "../../../../../public/yourcart.png";

import style from "./your-cart.module.css";

export default function ModalHeader() {
  return (
    <div className={style.yourcart}>
      <Image alt="yourcart" src={yourcart} />
    </div>
  );
}
