import Marquee from "react-fast-marquee";

import style from "./carousel-text.module.css";

export default function CarouselText() {
  return (
    <div className={style.textWrapper}>
      <Marquee gradientColor={[0, 0, 0]} speed={70}>
        <span>
          {" "}
          A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag{" "}
        </span>
      </Marquee>
    </div>
  );
}
