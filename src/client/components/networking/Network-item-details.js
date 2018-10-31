import React from 'react';


class NetworkItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemDetailedData : "",
            isLoading: true,
            isActive : true
        }
        this.deleteNetwork = this.deleteNetwork.bind(this);
    }
    componentDidMount(){
        fetch(`/api/networking/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(response => this.setState({
            itemDetailedData : response,
            isLoading : false
        }));
    }
    deleteNetwork(){
        console.log("deleting.....");
        fetch(`/api/networking/${this.state.itemDetailedData.id}`,{
          method: 'DELETE'
        }).then(res => res.json())
        .then(response=> {
          console.log('deelete :', response);
          this.setState({
              isActive : false
          });
          
        })
      }
    
    render(){
        if(!this.state.isLoading && this.state.isActive){
            const item = this.state.itemDetailedData;
            console.log(item);
        return(
            <div>
                    <div key={item.id} className="card mb-4 networking-item">
                        <div className="card-header">
                        <h2 className="card-title pricing-card-title"> {item.organisation_name}</h2>
                        </div>
                        <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <div><strong>Org. Address:</strong> {item.organisation_address}</div>
                                <div><strong>Contact Person:</strong> {item.contact_person}</div>
                                <div><strong>Contact Email:</strong> {item.contact_email}</div>
                                <div><strong>Contact Number:</strong> {item.contact_phone}</div>
                                <div><strong>Organisation Name</strong> {item.organisation_name}</div>
                                <div><strong>Organisation City </strong> {item.organisation_city}</div>
                                <div><strong>Organisation Postal code </strong> {item.organisation_postal_code}</div>
                                <div><strong>Sector activity </strong> {item.sector_activity}</div>
                                <div><strong>Organisation description </strong> {item.organisation_description}</div>
                                <div><strong>Organisation URL </strong> {item.organisation_url}</div>
                            </div>
                            <div className="col-md-4">
                            <img className="my-0 font-weight-normal networking-image" src={item.organisation_logo} width="100%" alt="Organization Logo"/>
                            </div>
                        </div>
                        </div>
                        <div className="card-footer">
                            <a href={`/Networking/edit/${item.id}`} className="btn btn-outline-danger btn-sm"> Update</a>
                            <button className="btn btn-outline-danger btn-sm network-edit-button" onClick={this.deleteNetwork}> Delete</button>
                        </div>
                  </div>
                
            </div>);
            }else if(!this.state.isLoading && !this.state.isActive){
                return(
                        <div>
                            <h4>Item Successfully deleted</h4>
                            <br/>
                            <a href="/Networking"> Go Back</a>
                        </div>);
            }
            else{
                return(<li>Is loading . . . . .</li>);
            }
    }
}

export default NetworkItemDetails;