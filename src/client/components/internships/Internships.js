import React from "react";
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';

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
      return <div>Loading ...</div>;
    } else {
      return (
        <div className="container"> 
        <h1>Internships</h1> 
        <br/>
        {contextType.isLoggedIn ? 
            <Link className="btn btn-outline-danger btn-lg btn-block mentor-add-button" to="/Internships/add">Add Internship</Link>
            : ""} 

            {internships.map(item => (
              <Link to={`/Internships/details/${item.id}`} key={item.id} className="card-as-link">
                <div key={item.id} className="card mb-4">
          
                  <div className="card-header">
                  <h5 className="card-title">{item.internship_title}</h5>
                
                  </div>
                  <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="card-text">{item.internship_description}</p>
                            <p className="card-text">Place : {item.location}</p>
                            <Link to={`/Internships/details/${item.id}`} className="btn btn-danger">
                              Read more...
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <img
                              className="internship-image rounded"
                              src={item.internship_theme_image}
                              alt={item.internship_title}
                            />
                        </div>
          
                    </div>
          
                  </div>

                  {contextType.isLoggedIn ? 
                  <div className="card-footer">
                    <Link to={`/Internships/edit/${item.id}`} className="btn btn-outline-danger network-edit-button btn-sm"> Edit</Link>
                    <Link to={`/Internships/delete/${item.id}`} className="btn btn-outline-danger btn-sm">Delete</Link>
                  </div>
                  : ""} 

                </div>

              </Link>
            ))}
        </div>
      );
    }
  }
}

export default Internships;