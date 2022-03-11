import Image from "next/image";

import footer from "../../../public/footer.svg";

export default function Footer() {
  return (
    <div>
      <Image alt="footer" src={footer} />
    </div>
  );
}
