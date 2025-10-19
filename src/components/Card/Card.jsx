import { FaCloudArrowUp } from "react-icons/fa6";
import styles from "./Card.module.css";

export default function Card({
  title = "",
  msg = "",
  icon = <FaCloudArrowUp />,
}) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-icon"]}>{icon}</div>
      <div className={styles["card-content"]}>
        {title && <div className={styles["card-title"]}>{title}</div>}
        {msg && <div className={styles["card-msg"]}>{msg}</div>}
      </div>
    </div>
  );
}
