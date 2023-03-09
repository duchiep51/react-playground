import { Switch } from "@mui/material";
import { createContext, useContext, useState } from "react";
import useEffectOnMount from "../../../hooks/useEffectOnMount";

const ToggleContext = createContext();

export function Toggle(props) {
  const [on, setOn] = useState(false);
  const toggle = () => {
    console.log("over here");
    setOn((on) => !on);
  };

  console.log("hrtr d");
  useEffectOnMount(() => {
    props.onToggle(on);
  }, [on]);

  const value = { on, toggle };

  return (
    <ToggleContext.Provider value={value}>
      {props.children}
    </ToggleContext.Provider>
  );
}

function useToggleContext() {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("This component cannot be used outside Toggle");
  }

  return context;
}

export function ToggleOn({ children }) {
  const { on } = useToggleContext();
  return on ? children : null;
}

export function ToggleOff({ children }) {
  const { on } = useToggleContext();
  console.log("on", on);
  return on ? null : children;
}

export function ToggleButton() {
  const { on, toggle } = useToggleContext();
  return <Switch checked={on} onChange={toggle} />;
}
