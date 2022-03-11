import type { NextComponentType } from "next";
import Image from "next/image";

import decorationBar from "../../../../../public/decoration-bar.png";

import styles from "./nav-decoration-bar.module.css";

const NavDecorationBar: NextComponentType = () => {
  return (
    <div id="nav-decoration-bar" className={styles.navDecorationBar}>
      <Image
        src={decorationBar}
        width={284}
        height={24}
        alt="decoration"
      ></Image>
    </div>
  );
};

export default NavDecorationBar;
