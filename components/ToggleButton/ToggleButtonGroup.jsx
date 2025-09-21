import React from "react";

const ToggleContext = React.createContext();
export { ToggleContext };

export default function ToggleButtonGroup({ children }) {
  const [activeToggle, setActiveToggle] = React.useState();

  function handleToggledButton(btn) {
    setActiveToggle(btn);
  }

  return (
    <ToggleContext.Provider value={{ activeToggle, handleToggledButton }}>
      {children}
    </ToggleContext.Provider>
  );
}
