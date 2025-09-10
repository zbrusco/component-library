import React from "react";
import { MenuContext } from "./Menu";
import styles from "./Menu.module.css";

export default function MenuDropdown({ children }) {
  const { open } = React.useContext(MenuContext);

  return (
    <>
      {open ? <div className={styles["menu-dropdown"]}>{children}</div> : null}
    </>
  );
}
