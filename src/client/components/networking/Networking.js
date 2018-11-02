import React from "react";
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
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
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
            <div className="container"> 
            <div className="row">
            <h1 className="col-md-8">NETWORKING</h1> 
                <a className="col-md-4 btn btn-outline-danger mentor-add-button" href="/Networking/add">Add New Network</a>

            </div>
                {items.map(item => (
                  <div key={item.id} className="col-md-12">
                  <div className="card mb-4 networking-item">
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
                            <a href={`/Networking/details/${item.id}`} className="badge badge-danger">Read more..</a>
                        </div>
                        <div className="col-md-5">
                          <img className="my-0 font-weight-normal networking-image" src={item.organisation_logo} width="100%" alt="Organization Logo"/>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                        <div className="row network-edit-button">
                        <a href={`/Networking/edit/${item.id}`} className="btn btn-outline-danger btn-sm"> Edit</a>
                      </div>
                        
                    </div>
                  </div>  
                  </div>
                ))}                                  
                </div>
      );
    }
  }
}

export default Networking;
