import { Button } from "@mui/material";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import usePost from "./hooks/usePost";

function App() {
  const [state, setState] = useState(1);
  usePost()

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
