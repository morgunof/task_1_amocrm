import {Timer} from "./components /Timer";
import './components /Styles.css';

function App() {
  return (<div className="app">
    <div className="container">
      <h1 className="header">
        🥳 Мой День Рождения будет через 🥳
      </h1>
      <Timer />
      <h1 className="footer">
        🎂 15 Апреля 2024 🍰
      </h1>
    </div>
  </div>);
}

export default App;
