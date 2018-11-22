import React from 'react';
import LoginContext from '../../contexts/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
{/*                         <img className="my-0 font-weight-normal networking-image" src={item.organisation_logo} height="100px" alt="Organization Logo"/> */}

                            <div className="row">
                                <div className="col-md-8 col-sm-12">
                                <dl className="row">
                                        <dt className="col-sm-3">Organisation City</dt> 
                                        <dd className="col-sm-9"> {item.organisation_city}</dd>
                                        <dt className="col-sm-3">Org description</dt> 
                                        <dd className="col-sm-9"> {item.organisation_description}</dd>
                                </dl>
                                    {this.state.showDetails ? "" : 
                                    <dl className="row">
                                        <dt className="col-sm-3">Address</dt> 
                                        <dd className="col-sm-9"> {item.organisation_address}</dd>
                                        <dt className="col-sm-3">Postal code</dt> 
                                        <dd className="col-sm-9"> {item.organisation_postal_code}</dd>
                                        <dt className="col-sm-3">Contact Person</dt> 
                                        <dd className="col-sm-9"> {item.contact_person}</dd>
                                        <dt className="col-sm-3">Contact Email</dt> 
                                        <dd className="col-sm-9"> {item.contact_email}</dd>
                                        <dt className="col-sm-3">Contact Number</dt> 
                                        <dd className="col-sm-9"> {item.contact_phone}</dd>
                                        <dt className="col-sm-3">Sector activity</dt> 
                                        <dd className="col-sm-9"> {item.sector_activity}</dd>
                                        <dt className="col-sm-3">Organisation URL</dt> 
                                        <dd className="col-sm-9"> <a href={item.organisation_url} target="blank">Click here</a></dd>
                                    </dl>
                                    }
                                 
                                </div>
                                <div className="col-md-4 col-sm-12">
                                <img className="my-0 font-weight-normal networking-image" src={item.organisation_logo} alt="Organization Logo"/>
                                </div>
                                <div className="col-md-3">
                                {this.state.showDetails ? 
                                    <button className="btn btn-sm btn-outline-danger" onClick={this.showDetails}>Read more <FontAwesomeIcon icon="caret-square-down"/></button> :
                                    <button className="btn btn-sm btn-outline-danger" onClick={this.showDetails}>Hide <FontAwesomeIcon icon="caret-square-up"/></button> 
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            { contextType.isLoggedIn & this.props.displayCardFooter ?  <div className="row network-edit-button">
                            <a href={`/Networking/edit/${item.id}`} className="btn btn-outline-danger btn-sm "> <FontAwesomeIcon icon="edit"/> Edit</a>
                            <a href={`/Networking/delete/${item.id}`} className="btn btn-outline-danger btn-sm"> <FontAwesomeIcon icon="trash-alt"/> Delete</a>                        
                        </div> : "" }
                        
                    </div>
                </div>
                );
        }
}

export default NetworkCard;