import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Search />
      <a href="https://github.com/Kerrigan1337/weather-react">Github link</a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
