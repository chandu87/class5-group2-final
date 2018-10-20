import React from "react";
import Header from "../header/Header"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

class Internships extends React.Component {
  constructor(props){
    super(props);
    this.state = {internships : []};
  }
  //fetch data using API
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/paredesrichard/commandline/master/internships.json')
      .then(response => response.json())
      .then(data => {
         this.setState({ internships : data })
      });

  }
  //Read data using console
  //Display data using list
  //Add style to it or follow List view from Group1
  render() {
      console.log(this.state.internships);
      const {internships} = this.state;
      if(internships.length <= 0){
        return ("Loading");
      }else{
    return (
      <div>
        <header>
          <Header />
        </header>
        <main id="Interships">
        <div className="container"> 
        <div className="row">

{ /*        
          {internships.map(item =>(
            // <li key={item.id}>{item.internship_title}</li>
            <div key={item.id} className="card">
            <div className="card-header">
            <h5>{item.internship_title}</h5>
            </div>
            <div className="card-body">
              {/* <h5 class="card-title">{item.internship_title}</h5> */}
{ /*
              <p className="card-text">{item.internship_description}</p>
              <a href="/" className="btn btn-primary">Click for more</a>
            </div>
          </div>
          
            ))}
*/ }
            <div className="col">
            <h1>Internships</h1> <br />
            {internships.map(item => (
              <Link key={item.id} to={item.organisation_website} target="_blank" className="networking-item">
              <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal"><img src={item.internship_theme_image} width="100%" alt={"Internship at "+ item.organisation_name} /></h4>
              </div>
              <div className="card-body">
                <h2 className="card-title pricing-card-title"> {item.internship_title}</h2>
                  <div><strong>Org. Name:</strong> {item.organisation_name}</div>
                  <div><strong>Internship Deadline:</strong>{item.internship_deadline}</div>
                  <div><strong>Contact Person:</strong> {item.contact_person}</div>
                  <div><strong>Contact Email:</strong> {item.email_contact}</div>
                  <div><strong>Contact Number:</strong> {item.phone_contact}</div>
              </div>
              </div>
              </Link>
            ))}
            </div>                  

            

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
}

export default Internships;
