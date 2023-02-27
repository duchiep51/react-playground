import { useState } from "react";
import "./App.css";
import SimulateBugWithLib from "./components/atoms/ErrorBoundary/ErrorBoundaryLib";

function App() {
  const [state, setState] = useState(() => 1);
  const [userId, setUserId] = useState("1");

  // console.log('----------------------')
  // console.log('outside')

  // useEffect(() => {
  //   console.log("hello", state);
  //   return () => {
  //     console.log('unmount')
  //   }
  // }, [state]);

  return (
    <div className="App">
      {/* <img src={Avatar} alt="avatar" /> */}
      {/* <SearchBar /> */}
      {/* <ClickIncrease />
      <HoverIncrease /> */}
      {/* <LoginForm /> */}
      <SimulateBugWithLib />
    </div>
  );
}

export default App;
