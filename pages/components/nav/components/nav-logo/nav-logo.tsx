import type { NextComponentType } from "next";
import Image from "next/image";

import logo from "../../../../../public/logo.svg";

const NavLogo: NextComponentType = () => {
  return (
    <div id="nav-logo" className="flex">
      <Image src={logo} width={192} height={28.15} alt="brand"></Image>
    </div>
  );
};

export default NavLogo;
