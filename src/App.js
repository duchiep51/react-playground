import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SimulateBugWithLib from "./components/atoms/ErrorBoundary/ErrorBoundaryLib";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
)


function App() {
  const [state, setState] = useState(() => 1);
  const [userId, setUserId] = useState("1");
  const notify = () => {
    // toast("Wow so easy !");

    toast.success(<Msg />, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
      <button onClick={notify}>Notify !</button>
    </div>
  );
}

export default App;
