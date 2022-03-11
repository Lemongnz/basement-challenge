import Image from "next/image";

import footer from "../../../public/header.svg";

import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.image}>
      <Image alt="header" src={footer} />
    </div>
  );
}
