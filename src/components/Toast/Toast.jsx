import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from "react-icons/fa6";
import styles from "./Toast.module.css";
import { useEffect } from "react";
export default function Toast({
  id,
  onDismiss,
  title,
  msg,
  status,
  className = "",
  time,
}) {
  // Dismount component after set time
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  const statusClass = status && styles[`toast-${status}`];
  const allClasses = [styles["toast-wrapper"], statusClass, className]
    .filter(Boolean)
    .join(" ");
  console.log("toast rendered");

  const badgeIcons = {
    success: <FaCircleCheck />,
    warning: <FaTriangleExclamation />,
    error: <FaCircleXmark />,
    neutral: <FaCircleInfo />,
  };
  return (
    <div className={allClasses}>
      <div className={styles["toast"]}>
        <div>{badgeIcons[status]}</div>
        <div className={styles["toast-content"]}>
          {title && <div className={styles["toast-title"]}>{title}</div>}
          {msg && <div className={styles["toast-msg"]}>{msg}</div>}
        </div>
      </div>
      <div
        className={styles["toast-progress-bar"]}
        style={{ animationDuration: `${time}ms` }}
      ></div>
    </div>
  );
}
