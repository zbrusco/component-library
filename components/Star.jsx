import { FaRegStar, FaStar } from "react-icons/fa6";
import useToggle from "../hooks/useToggle";

export default function Star({ onChange = () => {} }) {
  const [on, toggleOpen] = useToggle({ onToggle: onChange });

  return (
    <>
      {on ? (
        <FaStar onClick={toggleOpen} className="star filled" />
      ) : (
        <FaRegStar onClick={toggleOpen} className="star" />
      )}
    </>
  );
}
