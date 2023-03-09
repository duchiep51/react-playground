import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CopyToClipboardButton from "./components/atoms/CopyToClipboardButton";
import SimulateBugWithLib from "./components/atoms/ErrorBoundary/ErrorBoundaryLib";
import {
  ToggleOn,
  Toggle,
  ToggleOff,
  ToggleButton,
} from "./components/widgets/Toggle/Toggle";
import Post from "./views/Post/Post";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

function App() {
  const [state, setState] = useState(1);
  const [userId, setUserId] = useState("1");
  const notify = () => {
    // toast("Wow so easy !");

    toast.success(<Msg />, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // console.log("----------------------");
  // console.log("outside");

  return (
    <div className="App">
      {/* <img src={Avatar} alt="avatar" /> */}
      {/* <SearchBar /> */}
      {/* <ClickIncrease />
      <HoverIncrease /> */}
      {/* <LoginForm /> */}
      {/* <SimulateBugWithLib />
      <button onClick={notify}>Notify !</button> */}
      {/* <Toggle onToggle={(on) => console.log(on)}>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle> */}
      {/* <button onClick={() => setState((prev) => ++prev)}>increase</button> */}
      {/* <Post /> */}
      <CopyToClipboardButton />
    </div>
  );
}

export default App;
