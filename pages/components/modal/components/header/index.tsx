import Image from "next/image";

import close from "../../../../../public/yourcart.png";

export default function ModalHeader() {
  return (
    <div>
      <Image alt="close" src={close} />
    </div>
  );
}
