import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


class Networking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
   componentDidMount() {
     fetch('/api/networking')
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
                <h1>Networking</h1> <br />
                {items.map(item => (
                  <Link to={item.organisation_url} target="_blank" className="networking-item">
                  <div className="card mb-4">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal"><img src={item.organisation_logo} width="100%" alt="Organization Logo"/></h4>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title pricing-card-title"> {item.organisation_name}</h2>
                      <div><strong>Org. Address:</strong> {item.organisation_address}</div>
                      <div><strong>Contact Person:</strong> {item.contact_person}</div>
                      <div><strong>Contact Email:</strong> {item.contact_email}</div>
                      <div><strong>Contact Number:</strong> {item.contact_phone}</div>
                      <br />
                      <a href="#" class="btn btn-danger">Read more..</a>
                  </div>
                  </div>
                  </Link>
                ))}                                  
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
}

export default Networking;
