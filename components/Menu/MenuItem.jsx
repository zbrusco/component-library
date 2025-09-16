import styles from "./Menu.module.css";
import React from "react";
import { MenuContext } from "./Menu";

export default function MenuItem({ children, onClick = () => {}, ...rest }) {
  const { toggleOpen } = React.useContext(MenuContext);

  function handleClick(event) {
    toggleOpen();
    onClick(event);
  }

  return (
    <div className={styles["menu-item"]} onClick={handleClick} {...rest}>
      {children}
    </div>
  );
}
