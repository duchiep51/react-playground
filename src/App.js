import { Button } from "@mui/material";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
