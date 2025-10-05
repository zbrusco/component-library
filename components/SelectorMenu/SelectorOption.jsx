import React from "react";
import { SelectorContext } from "./SelectorMenu";
import styles from "./SelectorMenu.module.css";

export default function SelectorOption({
  value,
  onClick = () => {},
  children,
}) {
  const {
    toggleOpen,
    inputText,
    activeOption,
    updateActiveOption,
    allowFilter,
  } = React.useContext(SelectorContext);

  const isSelected = activeOption === value;

  const optionClasses = `
    ${styles.option}
    ${isSelected ? styles.selected : ""}
  `;

  // Make the option visible if no input text or the filter is disabled
  // or the input text contains that option's text
  const isVisible =
    !inputText ||
    !allowFilter ||
    children.toLowerCase().includes(inputText.toLowerCase());

  const handleClick = () => {
    onClick();
    updateActiveOption(value, children);
    toggleOpen();
  };

  return isVisible ? (
    <li className={optionClasses.trim()} onClick={handleClick}>
      {children}
    </li>
  ) : null;
}
