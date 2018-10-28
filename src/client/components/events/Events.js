import React from "react";
import Calendar from "./Calendar";
import Header from "../header/Header"
import Footer from "../footer/Footer";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
    //fetch data using API
    componentDidMount() {
      fetch("/api/internships")
        .then(response => response.json())
        .then(data => {
          console.log("------>",data);
          this.setState({ internships: data });
        });
    }
    //Read data using console
    //Display data using list
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <div className="row">
              <div className="col-md-6">
                <Calendar />
              </div>
              <div className="col-md-5">
                <li>Hello</li>
                <li>Hello</li>  
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </div>
          </div>
          
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Events;
