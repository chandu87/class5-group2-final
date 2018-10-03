import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              Events
              <b> HYF</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
