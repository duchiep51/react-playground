import "./App.css";
import Avatar from './assets/avatar.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Avatar} alt='avatar' />
        <p>Hiep Tran</p>
        <p>Happy lunar new year!!!</p>
      </header>
    </div>
  );
}

export default App;
