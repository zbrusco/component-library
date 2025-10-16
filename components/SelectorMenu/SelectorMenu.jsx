import React, { Children, cloneElement } from "react";
import styles from "./SelectorMenu.module.css";
import { FaChevronUp, FaChevronDown, FaXmark } from "react-icons/fa6";
import useClickOutside from "../../hooks/useClickOutside";

const SelectorContext = React.createContext();
export { SelectorContext };

export default function Selector({
  label = "Select an option",
  initialSelected = { value: "", label: "" },
  onChange = () => {},
  options = [],
  upIcon = <FaChevronUp />,
  downIcon = <FaChevronDown />,
  closeIcon = <FaXmark />,
}) {
  const [isOpen, setIsOpen] = React.useState(false); // State for the dropdown menu
  const [inputText, setInputText] = React.useState(initialSelected.label || ""); // State for the input text
  const [allowFilter, setAllowFilter] = React.useState(false); // State to allow the option filtering
  const [highlightedIndex, setHighlightedIndex] = React.useState(0); // State to highlight option
  const [activeOption, setActiveOption] = React.useState(
    initialSelected.value || ""
  ); // State to track the active option

  const inputRef = React.useRef(null);
  const selectorRef = React.useRef(null);

  // Close the dropdown if the user clicks outside the component
  useClickOutside(selectorRef, () => setIsOpen(false));

  const visibleOptions = options.filter(
    (item) =>
      !inputText ||
      !allowFilter ||
      item.label.toLowerCase().includes(inputText.toLowerCase())
  );

  // Updates the menu with the selected values
  const updateActiveOption = (value, label) => {
    setInputText(label);
    setActiveOption(value);
    setIsOpen(false);
    setAllowFilter(false);
    setHighlightedIndex(options.findIndex((option) => option.label === label));
    onChange(value);
  };
  const updateInputText = (e) => {
    if (!isOpen) {
      setIsOpen(true);
    }
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

  // Handle keyboard inputs
  const handleKeyDown = (e) => {
    if (!isOpen && e.key === "ArrowDown") {
      setIsOpen(true);
      return;
    }
    const isNothingHighlighted = highlightedIndex === null;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        // Move highlight down, wrapping to the top if at the end
        setHighlightedIndex((prevIndex) => {
          if (isNothingHighlighted) return 0;
          if (prevIndex > visibleOptions.length - 2) return 0;
          return prevIndex + 1;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        // Move highlight up, wrapping to the bottom if at the start
        setHighlightedIndex((prevIndex) => {
          if (isNothingHighlighted) return visibleOptions.length - 1;
          if (prevIndex < 1) return visibleOptions.length - 1;
          return prevIndex - 1;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (!isNothingHighlighted) {
          // Select the highlighted option
          const selectedOption = visibleOptions[highlightedIndex];
          if (selectedOption) {
            updateActiveOption(selectedOption.value, selectedOption.label);
          }
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(null);
        break;
    }
  };

  return (
    <div className={styles.container} ref={selectorRef}>
      <input
        type="text"
        value={inputText}
        onChange={updateInputText}
        onClick={() => {
          setIsOpen((prev) => !prev);
          if (!activeOption) {
            setHighlightedIndex(0);
          }
        }}
        placeholder={label}
        className={styles.input}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.selectorIconContainer} onClick={focusInput}>
        {inputText && (
          <button onClick={deleteInput} className={styles.selectorIcon}>
            {closeIcon}
          </button>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={styles.selectorIcon}
        >
          {isOpen ? upIcon : downIcon}
        </button>
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {visibleOptions.map((item, index) => {
            const isSelected = activeOption === item.value;
            const isHighlighted = highlightedIndex === index;
            const optionClasses = `${styles.option}
              ${isSelected && styles.selected}
              ${isHighlighted && styles.highlighted}`;

            return (
              <li
                className={optionClasses}
                onClick={() => {
                  updateActiveOption(item.value, item.label);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
