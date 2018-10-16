import React from "react";
import Calendar from "./Calendar";
import Header from "../header/Header"

class Events extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>

        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default Events;
