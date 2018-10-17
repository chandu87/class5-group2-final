import React from "react";
import Header from "../header/Header"

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
                  <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal"><img src={item.organisation_logo} width="100%"/></h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"> {item.organisation_name}</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Org. Address: {item.organisation_address}</li>
                      <li>Contact Person: {item.contact_person}</li>
                      <li>Contact Email: {item.contact_email}</li>
                      <li>Contact Number: {item.contact_phone}</li>
                    </ul>
                  </div>
                  </div>
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
