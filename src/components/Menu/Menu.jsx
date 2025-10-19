import React from "react";
import useToggle from "../../hooks/useToggle";
import styles from "./Menu.module.css";

const MenuContext = React.createContext();
export { MenuContext };

export default function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
    onToggle: onOpen,
  });

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className={styles["menu"]}>{children}</div>
    </MenuContext.Provider>
  );
}
