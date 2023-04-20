import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MultiStepsForm from "./components/widgets/MultiStepForm";
import usePost from "./hooks/usePost";
import Routes from "./routes";
import NavBar from "./components/atoms/NavBar/NavBar";

function App() {
  // usePost();
  //   <MultiStepsForm />

  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
