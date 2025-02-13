import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import ReactDifficulty from "./components/ReactDifficulty/ReactDifficulty";

function App() {
  return (
    <div>
      <ReactDifficulty />
      <PasswordGenerator />
    </div>
  );
}

export default App;
