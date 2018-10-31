import React from "react";
import Calendar from "./Calendar";

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
        <div className="col-md-6">
          <Calendar />
        </div>
      </div>
    );
  }
}

export default Events;
