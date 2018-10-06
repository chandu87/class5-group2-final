import React, { Component } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Navigation/>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
