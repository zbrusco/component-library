import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from "react-icons/fa6";
import styles from "./Banner.module.css";

export default function Banner({
  children,
  status = "neutral",
  title = "",
  msg = "",
  className = "",
}) {
  const statusClass = status && styles[`banner-${status}`];
  const allClasses = [styles["banner"], statusClass, className]
    .filter(Boolean)
    .join(" ");

  const badgeIcons = {
    success: <FaCircleCheck />,
    warning: <FaTriangleExclamation />,
    error: <FaCircleXmark />,
    neutral: <FaCircleInfo />,
  };

  return (
    <div className={allClasses}>
      <div>{badgeIcons[status]}</div>
      <div className={styles["banner-content"]}>
        {title && <div className={styles["banner-title"]}>{title}</div>}
        {msg && <div className={styles["banner-msg"]}>{msg}</div>}
        {children}
      </div>
    </div>
  );
}
