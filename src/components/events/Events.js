import React from "react";
import Calendar from "./Calendar";
import Header from "../header/Header"
import Footer from "../footer/Footer";

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

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default Events;
