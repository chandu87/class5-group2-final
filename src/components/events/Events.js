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

        <div className="col-md-6">
          <Calendar />
        </div>

      </div>
    );
  }
}

export default Events;
