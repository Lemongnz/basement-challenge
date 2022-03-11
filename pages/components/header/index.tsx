import Image from "next/image";

import footer from "../../../public/header.svg";

export default function Header() {
  return (
    <div>
      <Image alt="header" src={footer} />
    </div>
  );
}
