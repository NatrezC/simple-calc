import React, { Component } from "react";

//import FunctionalComponent from "./components/FunctionalComponent";
import Calculator from "./components/Calculator.js";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FunctionalComponent /> */}
        <Calculator />
      </div>
    );
  }
}

export default App;
