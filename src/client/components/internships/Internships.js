import React from "react";

class Internships extends React.Component {
  constructor(props) {
    super(props);
    this.state = { internships: [] };
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
  //Add style to it or follow List view from Group1
  render() {
    console.log(this.state.internships);
    const { internships } = this.state;
    if (internships.length <= 0) {
      return "Loading";
    } else {
      return (
        <div>
            {internships.map(item => (
              <div key={item.id} className="card" style={{ width: "100%" }}>

                <div className="card-header">
                <h5 className="card-title">{item.internship_title}</h5>
               
                </div>
                <div className="card-body">
                  <div className="row">
                      <div className="col-md-8">
                              <p className="card-text">{item.internship_description}</p>
                          <p className="card-text">Place : {item.location}</p>
                          <a href="#" className="btn btn-danger">
                            Click for more
                          </a>
                      </div>
                      <div className="col-md-4">
                          <img
                        className="internship-image"
                        src={item.internship_theme_image}
                        alt={item.internship_title}
                        />
                      </div>

                  </div>

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
        </div>
      );
    }
  }
}

export default Internships;