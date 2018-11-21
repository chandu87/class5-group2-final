import React from "react";
import classNames from 'classnames';
import Calendar from "./Calendar";
import Map from "./Map";
import LoginContext from '../../contexts/login';

class Events extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  //fetch data using API
  componentDidMount() {
    fetch("/api/events")
      .then(response => response.json())
      .then(data => {
        // console.log("------>",data);
        this.setState({ events: data });
      });
  }

  renderAddNewEventButton = () => (
    <a className={`btn btn-outline-danger add-event-btn ${classNames({ disabled: !this.context.isLoggedIn })}`} href="/Events/add">ADD NEW EVENT</a> 
  )


  //Read data using console
  //Display data using list
  render() {
    const contextType = LoginContext._currentValue;
    console.log("Networking page",contextType.isLoggedIn);

    return (
      <div className="container">
      <h1>Events</h1>
        <div className="container">
          {/* { contextType.isLoggedIn ? this.renderAddNewEventButton() : "" }           */}
          { contextType.isLoggedIn ? <a className='btn btn-outline-danger add-event-btn' href="/Events/add">ADD NEW EVENT</a> : "" }          
          {/* <div className="btn-group events-btn" role="group">
            <button className="btn btn-outline-danger active">Calender View</button>
            <button className="btn btn-outline-danger">Map View</button>
          </div> */}
        </div>
        <br/>
        <Map events={this.state.events}/>

      </div>
    );
  }
}

export default Events;
