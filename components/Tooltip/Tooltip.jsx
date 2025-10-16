import styles from "./Tooltip.module.css";
import Button from "../Button/Button";
import { FaInbox, FaXmark } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export default function Tooltip({
  color = "gray",
  type = "bold",
  icon = <FaInbox />,
  title = "Archive notes",
  msg = "",
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipTriggerRef = useRef(null);

  useClickOutside(tooltipTriggerRef, close);

  const colorClass = color && type && styles[`tooltip-${color}-${type}`];
  const allClasses = [styles["tooltip-wrapper"], colorClass]
    .filter(Boolean)
    .join(" ");

  function close() {
    setIsVisible(false);
  }

  return (
    <div className={styles["container"]}>
      {isVisible && (
        <div className={allClasses}>
          <div className={styles["tooltip"]}>
            <div className={styles["tooltip-icon"]}>{icon}</div>

            <div className={styles["tooltip-content"]}>
              {title && <div className={styles["tooltip-title"]}>{title}</div>}

              {msg && <div className={styles["tooltip-msg"]}>{msg}</div>}
            </div>

            <Button
              variant="sm"
              className={styles["tooltip-close-button"]}
              onClick={close}
            >
              <FaXmark />
            </Button>
          </div>
          <div className={styles["triangle"]}></div>
        </div>
      )}
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible((prev) => !prev)}
        ref={tooltipTriggerRef}
      >
        {children}
      </div>
    </div>
  );
}
