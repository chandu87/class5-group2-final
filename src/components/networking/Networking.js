import React from "react";
import Header from "../header/Header"
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

    fetch('https://my.api.mockaroo.com/networking.json?key=d38d0f10')
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
          <header>
            <Header />
          </header>
          <main>
            <h3>Networking</h3>
            <div class="container"> 
              <div class="row">
                <div class="col">
                {items.map(item => (
                  <Link to={item.organisation_url} target="_blank">
                  <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal"><img src={item.organisation_logo} width="100%"/></h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"> {item.organisation_name}</h1>
                      <div><strong>Org. Address:</strong> {item.organisation_address}</div>
                      <div><strong>Contact Person:</strong> {item.contact_person}</div>
                      <div><strong>Contact Email:</strong> {item.contact_email}</div>
                      <div><strong>Contact Number:</strong> {item.contact_phone}</div>

                  </div>
                  </div>
                  </Link>
                  ))}                                  
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
  }
}

export default Networking;
