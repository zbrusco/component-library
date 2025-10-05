import React from "react";
import styles from "./SelectorMenu.module.css";
import { FaChevronUp, FaChevronDown, FaXmark } from "react-icons/fa6";
import useClickOutside from "../../hooks/useClickOutside";

const SelectorContext = React.createContext();
export { SelectorContext };

export default function Selector({
  label = "Select an option",
  initialSelected = { value: "", label: "" },
  upIcon = <FaChevronUp />,
  downIcon = <FaChevronDown />,
  closeIcon = <FaXmark />,
  children,
}) {
  const [isOpen, setIsOpen] = React.useState(false); // State for the dropdown menu
  const [inputText, setInputText] = React.useState(initialSelected.label || ""); // State for the input text
  const [allowFilter, setAllowFilter] = React.useState(false); // State to allow the option filtering
  const [activeOption, setActiveOption] = React.useState(
    initialSelected.value || ""
  ); // State to track the active option

  const inputRef = React.useRef(null);
  const selectorRef = React.useRef(null);

  // Close the dropdown if the user clicks outside the component
  useClickOutside(selectorRef, () => setIsOpen(false));

  // Updates the menu with the selected values
  const updateActiveOption = (value, label) => {
    setAllowFilter(false);
    setInputText(label);
    setActiveOption(value);
  };

  // Toggle the dropdown
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const updateInputText = (e) => {
    setAllowFilter(true);
    setInputText(e.target.value);
  };

  const deleteInput = () => {
    setAllowFilter(true);
    setInputText("");
    setActiveOption("");
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <SelectorContext.Provider
      value={{
        toggleOpen,
        inputText,
        activeOption,
        updateActiveOption,
        allowFilter,
      }}
    >
      <div className={styles.container} ref={selectorRef}>
        <input
          type="text"
          value={inputText}
          onChange={updateInputText}
          onClick={toggleOpen}
          placeholder={label}
          className={styles.input}
          ref={inputRef}
        />
        <div className={styles.selectorIconContainer} onClick={focusInput}>
          {inputText && (
            <button onClick={deleteInput} className={styles.selectorIcon}>
              {closeIcon}
            </button>
          )}
          <button onClick={toggleOpen} className={styles.selectorIcon}>
            {isOpen ? upIcon : downIcon}
          </button>
        </div>
        {isOpen && <ul className={styles.dropdown}>{children}</ul>}
      </div>
    </SelectorContext.Provider>
  );
}
