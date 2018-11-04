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
            <Link className="btn btn-outline-danger btn-lg btn-block mentor-add-button" to="/Mentors/add">Add New Mentor</Link>
            <div className="card-columns">

            {items.map(item => (
              <div key={item.id} class="card">
              <img className="card-img-top mentor-image" src={item.profile_picture} alt={item.first_name + " "+ item.last_name} />
              <div className="card-body">
                <h5 className="card-title">{item.first_name + " "+ item.last_name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{item.offering}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{item.availability}</span> <br />
                </p>
                <a href="#" class="btn btn-danger">Read more..</a>
                <Link to={`/Mentors/edit/${item.id}`} target="_blank" className="btn btn-outline-danger btn-sm pull-right"> Edit</Link>                
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
