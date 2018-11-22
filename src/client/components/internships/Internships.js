import React from "react";
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';
import InternshipCard from "./InternshipCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingSpinner from '../extra/LoadingSpinner';


class Internships extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      internships: [],
    }
  }

  //fetch data using API
  componentDidMount() {
    fetch("/api/internships")
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          internships: data 
        });
      });
  }

  //Read data using console
  //Display data using list
  //Add style to it or follow List view from Group1

  render() {
    const contextType = LoginContext._currentValue;
    console.log("Internship page",contextType.isLoggedIn);

    const { internships } = this.state;
    if (internships.length <= 0) {
      return <LoadingSpinner/>;
    } else {
      return (
        <div className="container"> 
        <h1>Internships</h1> 
        <br/>
        {contextType.isLoggedIn ? 
            <Link className="btn btn-outline-danger btn-lg mentor-add-button" to="/Internships/add"><FontAwesomeIcon icon="plus"/> Add Internship</Link>
            : ""} 

            {internships.map(item => (         
              <InternshipCard key={item.id} internshipItem={item} displayFooter={true}/>
            ))}
        </div>
      );
    }
  }
}

export default Internships;