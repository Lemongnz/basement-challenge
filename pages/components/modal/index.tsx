import ReactDOM from "react-dom";

import style from "./modal.module.css";

export default function Modal({children}: any) {
  const getModalPortal: any = document.getElementById("modal-root");

  return ReactDOM.createPortal(<div className={style.modal}>{children}</div>, getModalPortal);
}
