import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import useDebounce from "./hooks/useDebounce";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

function App() {
  const [state, setState] = useState(1);

  return (
    <div className="App">
      <Button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
