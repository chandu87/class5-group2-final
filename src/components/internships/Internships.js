import React from "react";
import Header from "../header/Header";

class Internships extends React.Component {
  constructor(props) {
    super(props);
    this.state = { internships: [] };
  }
  //fetch data using API
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/paredesrichard/commandline/master/internships.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ internships: data });
      });
  }
  //Read data using console
  //Display data using list
  //Add style to it or follow List view from Group1
  render() {
    console.log(this.state.internships);
    const { internships } = this.state;
    if (internships.length <= 0) {
      return "Loading";
    } else {
      return (
        <div>
          <header>
            <Header />
          </header>
          <main>
            {internships.map(item => (
              <div key={item.id} className="card" style={{ width: "100%" }}>

                <div className="card-header">
                <img
                    className="card-img-top"
                    src={item.internship_theme_image}
                    alt={item.internship_title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.internship_title}</h5>
                  <p className="card-text">{item.internship_description}</p>
                  <p className="card-text">Place : {item.location}</p>
                  <a href="#" className="btn btn-primary">
                    Click for more
                  </a>
                </div>
                <div className="card-footer">
                <small className="text-muted">
                    Added Date : {item.internship_add_date} 
                  </small> 
                  <small className="text-muted dead-line">
                    Deadline : {item.internship_deadline}
                  </small>

                </div>
                
              </div>
            ))}
          </main>
          
        </div>
      );
    }
  }
}

export default Internships;
