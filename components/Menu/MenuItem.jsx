import styles from "./Menu.module.css";

export default function MenuItem({ children }) {
  return <div className={styles["menu-item"]}>{children}</div>;
}
