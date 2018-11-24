import React from 'react';
import LoginContext from '../../contexts/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class EventsCard extends React.Component{
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
        const item = this.props.event;
        const contextType = LoginContext._currentValue;
        console.log("Networking page",contextType.isLoggedIn);
    
        return(
                            <div id={`class${item.id}`} className={item.id== this.props.activeEvent ? "list-group-item list-group-item-action flex-column align-items-start card active" : "list-group-item list-group-item-action flex-column align-items-start card"} >
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{item.event_name}</h5>
                                    <small>{item.event_language}</small>
                                </div>
                                <dl className="row">
                                    <dt className="col-sm-3">Category</dt> 
                                    <dd className="col-sm-9"> {item.event_type}</dd>
                                    <dt className="col-sm-3">From </dt> 
                                    <dd className="col-sm-9"> {item.event_start_date} - {item.event_start_hour}</dd>
                                </dl>
                                {this.state.showDetails ? "" : 
                                    <dl className="row">
                                        <dt className="col-sm-3">To </dt> 
                                        <dd className="col-sm-9"> {item.event_end_date} - {item.event_end_hour}</dd>
                                        <dt className="col-sm-3">Agenda</dt> 
                                        <dd className="col-sm-9"> {item.event_agenda}</dd>
                                        <dt className="col-sm-3">Max participants</dt> 
                                        <dd className="col-sm-9"> {item.max_participants}</dd>
                                        <hr className="hr-style2"/>
                                        <dt className="col-sm-3">CONTACT</dt> 
                                        <dd className="col-sm-9"> </dd>
                                        <dt className="col-sm-3">Address</dt> 
                                        <dd className="col-sm-9"> {item.event_address}</dd>
                                        <dt className="col-sm-3">City</dt> 
                                        <dd className="col-sm-9"> {item.event_city}</dd>
                                        <dt className="col-sm-3">Postal Code</dt> 
                                        <dd className="col-sm-9"> {item.event_postal_code}</dd>
                                        <dt className="col-sm-3">Person</dt> 
                                        <dd className="col-sm-9"> {item.contact_person}</dd>
                                        <dt className="col-sm-3">Email</dt> 
                                        <dd className="col-sm-9"> {item.contact_email}</dd>
                                        <dt className="col-sm-3">Phone</dt> 
                                        <dd className="col-sm-9"> {item.contact_phone}</dd>

                                        <div className="">
                                            <img className="my-0 font-weight-normal networking-image" src={item.event_theme_image} alt="Organization Logo"/>
                                        </div>
                                    </dl>
                                }
                                <div className="d-flex w-100 justify-content-between">
                                {this.state.showDetails ? 
                                    <button className="btn badge badge-danger event-btn" onClick={this.showDetails}>Read more <FontAwesomeIcon icon="caret-square-down"/></button> :
                                    <button className="btn badge badge-danger" onClick={this.showDetails}>Hide <FontAwesomeIcon icon="caret-square-up"/></button> 
                                    }

                                {/* <button className="btn badge badge-danger" onClick={this.showDetails}>{this.state.showDetails ? "Read more..." : "Hide"}</button> */}

                                            {contextType.isLoggedIn ? <div>
                                                <a href={`/Events/edit/${item.id}`} className="btn badge badge-danger event-btn"><FontAwesomeIcon icon="edit"/> Edit</a>
                                                <a href={`/Events/delete/${item.id}`} className="btn badge badge-danger event-btn"><FontAwesomeIcon icon="trash-alt"/> Delete</a>
                                                </div> : ""}
                                </div>

                            </div>                    
            );
    }
}

export default EventsCard;