import React from "react";
import { Link } from "react-router-dom";

import './Mentors.css';

class Mentors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('/api/mentors')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div> Loading.... </div>;
    }
    else {
      return (
        <div>
          <div className="container"> 
          <div className="row">
          <div className="col">
          <h1>Mentors</h1> <br />
            <a href="/Mentors/add">Add new</a>
            <div className="card-columns">

            {items.map(item => (
              <div key={item.id} class="card">
              <img className="mentor-image" src={item.profile_picture} alt={item.first_name + " "+ item.last_name} />
              <div className="card-body">
                <Link to={`/Mentors/edit/${item.id}`} target="_blank">Edit</Link>
                <h5 className="card-title">{item.first_name + " "+ item.last_name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{item.offering}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{item.availability}</span> <br />
                </p>
                <a href="#" class="btn btn-danger">Read more..</a>
              </div>
              </div>
              ))}
            </div>
          </div>
          </div>
          </div>
        </div>
      );
    }
  }
}

export default Mentors;
