import { useEffect } from "react";
import { Umzug, memoryStorage } from "umzug";
// import { memoryStorage } from "umzug/lib/storage/memory";
// import { Umzug } from "umzug/lib/umzug";
import "./App.css";
import logo from "./logo.svg";

function App() {
  useEffect(() => {
    const umzug = new Umzug({
      migrations: [],
      storage: memoryStorage(),
      logger: console,
    });
    console.log(umzug)
    return umzug;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
