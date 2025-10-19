import { FaRegStar, FaStar } from "react-icons/fa6";
import useToggle from "../../hooks/useToggle";
import styles from "./Star.module.css";

export default function Star({ onChange = () => {} }) {
  const [on, toggleOpen] = useToggle({ onToggle: onChange });

  return (
    <>
      {on ? (
        <FaStar
          onClick={toggleOpen}
          className={`${styles["star"]} ${styles["filled"]}`}
        />
      ) : (
        <FaRegStar onClick={toggleOpen} className={styles["star"]} />
      )}
    </>
  );
}
