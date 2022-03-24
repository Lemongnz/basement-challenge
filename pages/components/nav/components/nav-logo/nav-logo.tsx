import type {NextComponentType} from "next";
import Image from "next/image";

import logo from "../../../../../public/logo.svg";

const NavLogo: NextComponentType = () => {
  return (
    <div className="flex" id="nav-logo">
      <Image alt="brand" height={28.15} src={logo} width={192} />
    </div>
  );
};

export default NavLogo;
