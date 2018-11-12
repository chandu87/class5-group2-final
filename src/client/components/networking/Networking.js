import React from "react";
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';


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
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        })
      });
  }

  render() {
        const contextType = LoginContext._currentValue;
        console.log("Networking page",contextType.isLoggedIn);

    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div className="container"> <h2>Loading.... </h2></div>;
    }
    else {
      return (
            <div className="container"> 
            <h1 className="">NETWORKING</h1>
            {contextType.isLoggedIn ? 
                <a className="btn btn-outline-danger btn-lg" href="/Networking/add">Add New Network</a>
                : ""} 
                {items.map(item => (
                  // <a href={`/Networking/details/${item.id}`} key={item.id} className="row card networking-item">
                   <div key={item.id} className="card mb-4 networking-item"> 
                    <div className="card-header">
                    <h5 className="card-title pricing-card-title"> {item.organisation_name}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-7">
                            <div><strong>Org. Address:</strong> {item.organisation_address}</div>
                            <div><strong>Contact Person:</strong> {item.contact_person}</div>
                            <div><strong>Contact Email:</strong> {item.contact_email}</div>
                            <div><strong>Contact Number:</strong> {item.contact_phone}</div>
                            <br/>
                            <a href={`/Networking/details/${item.id}`} className="btn btn-outline-danger">Read more..</a>
                        </div>
                        <div className="col-md-5">
                          <img className="my-0 font-weight-normal networking-image" src={item.organisation_logo} width="100%" alt="Organization Logo"/>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                    { contextType.isLoggedIn ?  <div className="row network-edit-button">
                        <a href={`/Networking/edit/${item.id}`} className="btn btn-outline-danger btn-sm "> Edit</a>
                        <a href={`/Networking/delete/${item.id}`} className="btn btn-outline-danger btn-sm"> Delete</a>                        
                      </div> : "" }
                        
                    </div>
                  </div> 
                  // </a>
                ))}                                  
                </div>
      );
    }
  }
}

export default Networking;
