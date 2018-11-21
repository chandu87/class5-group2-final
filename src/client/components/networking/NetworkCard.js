import React from 'react';
import LoginContext from '../../contexts/login';


class NetworkCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : true
        }
    }
    showDetails = ()=>{
        this.setState({
            showDetails : !this.state.showDetails
        });
    }
    render(){
        const contextType = LoginContext._currentValue;
        console.log("Networking page",contextType.isLoggedIn);

        const item = this.props.networkItem;
        return(
                <div key={item.id} className="card mb-4 networking-item">
                        <div className="card-header">
                        <h2 className="card-title pricing-card-title"> {item.organisation_name}</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <div><strong>Organisation Name</strong> {item.organisation_name}</div>
                                    <div><strong>Organisation City </strong> {item.organisation_city}</div>
                                    <div><strong>Organisation description </strong> {item.organisation_description}</div>
                                    {this.state.showDetails ? "" : 
                                    <div>
                                        <div><strong>Org. Address:</strong> {item.organisation_address}</div>
                                        <div><strong>Contact Person:</strong> {item.contact_person}</div>
                                        <div><strong>Contact Email:</strong> {item.contact_email}</div>
                                        <div><strong>Contact Number:</strong> {item.contact_phone}</div>
                                        <div><strong>Organisation Postal code </strong> {item.organisation_postal_code}</div>
                                        <div><strong>Sector activity </strong> {item.sector_activity}</div>
                                        <div><strong>Organisation URL </strong> {item.organisation_url}</div>
                                    </div>
                                    }
                                    <button className="btn btn-sm btn-outline-danger" onClick={this.showDetails}>{this.state.showDetails ? "Read more..." : "Hide"}</button>
                                </div>
                                <div className="col-md-4">
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
                );
        }
}

export default NetworkCard;