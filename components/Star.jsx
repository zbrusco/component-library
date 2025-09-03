import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../hooks/useToggle";

export default function Star({ onChange = () => {} }) {
  const [on, toggleOpen] = useToggle({ onToggle: onChange });

  return (
    <>
      {on ? (
        <BsStarFill onClick={toggleOpen} className="star filled" />
      ) : (
        <BsStar onClick={toggleOpen} className="star" />
      )}
    </>
  );
}
