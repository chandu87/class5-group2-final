import React from "react";
import Calendar from "./Calendar";
import Navigation from "../Navigation";

class Events extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default Events;
