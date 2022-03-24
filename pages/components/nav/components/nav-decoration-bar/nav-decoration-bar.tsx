import type {NextComponentType} from "next";
import Image from "next/image";

import decorationBar from "../../../../../public/decoration-bar.png";

import styles from "./nav-decoration-bar.module.css";

const NavDecorationBar: NextComponentType = () => {
  return (
    <div className={styles.navDecorationBar} id="nav-decoration-bar">
      <Image alt="decoration" height={24} src={decorationBar} width={284} />
    </div>
  );
};

export default NavDecorationBar;
