import styles from "./ToggleButton.module.css";
import { useContext, useEffect } from "react";
import { ToggleContext } from "./ToggleButtonGroup";
import Button from "../Button/Button";

export default function ToggleButton({
  children,
  className,
  selected = false,
  onClick = () => {},
  size,
  ...rest
}) {
  const { activeToggle, handleToggledButton } = useContext(ToggleContext);

  // Toggle selected button on first render
  useEffect(() => {
    if (selected) {
      handleToggledButton(children);
    }
  }, []);

  const isToggled = activeToggle === children;

  let sizeClass = size && styles[`button-${size}`];
  let toggledClass = isToggled && styles["button-toggled"];

  const allClasses = [styles.button, sizeClass, toggledClass, className]
    .filter(Boolean)
    .join(" ");

  function handleClick(event) {
    handleToggledButton(children);
    onClick(event);
  }

  return (
    <Button className={allClasses} onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
}
