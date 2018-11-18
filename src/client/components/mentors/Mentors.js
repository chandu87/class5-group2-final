import React from "react";
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';

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
    const contextType = LoginContext._currentValue;
    console.log("Mentors page",contextType.isLoggedIn);

    const { isLoaded, items } = this.state;
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
          {contextType.isLoggedIn ? 
            <Link className="btn btn-outline-danger btn-lg btn-block mentor-add-button" to="/Mentors/add">Add New Mentor</Link>
            : ""} 
          
            <div className="card-columns">

            {items.map(item => (
              <div key={item.id} className="card">
              <img className="card-img-top mentor-image" src={item.profile_picture} alt={item.first_name + " "+ item.last_name} />
              <div className="card-body">
                <h5 className="card-title">{item.first_name + " "+ item.last_name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{item.offering}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{item.availability}</span> <br />
                </p>
                <Link to={`/Mentors/details/${item.id}`} className="btn btn-danger">Read more..</Link>

                {contextType.isLoggedIn ? 
                  <span>
                    <Link to={`/Mentors/delete/${item.id}`} className="btn btn-outline-danger btn-sm pull-right"> Delete</Link>                
                    <Link to={`/Mentors/edit/${item.id}`} className="btn btn-outline-danger btn-sm pull-right"> Edit</Link>
                  </span> : ""} 

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
