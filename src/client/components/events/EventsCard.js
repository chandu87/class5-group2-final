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
                                <small><strong>Category :</strong>{item.event_type}</small>
                                <br/>
                                <small><strong>From :</strong> {item.event_start_date} - {item.event_start_hour}</small> 
                                <br/>
                                {this.state.showDetails ? "" : <div>
                                        <small><strong> To </strong>{item.event_end_date} - {item.event_end_hour}</small>
                                        <div><small><strong>Agenda : </strong> {item.event_agenda}</small></div>
                                        <div><small><strong>Org. Address: </strong> {item.event_address}</small></div>
                                        <div><small><strong>City: </strong> {item.event_city}</small></div>
                                        <div><small><strong>Postal Code: </strong> {item.event_postal_code}</small></div>
                                        <div><small><strong>Contact Person:</strong> {item.contact_person}</small></div>
                                        <div><small><strong>Contact Email:</strong> {item.contact_email}</small></div>
                                        <div><small><strong>Contact Phone: </strong> {item.contact_phone}</small></div>
                                        <div><small><strong>Event URL: </strong> {item.event_URL}</small></div>
                                        <div><small><strong>Max participants: </strong> {item.max_participants}</small></div>
                                        <div className="">
                                            <img className="my-0 font-weight-normal networking-image" src={item.event_theme_image} alt="Organization Logo"/>
                                        </div>
                                    </div>
                                }
                                <div className="d-flex w-100 justify-content-between">
                                {this.state.showDetails ? 
                                    <button className="btn badge badge-danger" onClick={this.showDetails}>Read more <FontAwesomeIcon icon="caret-square-down"/></button> :
                                    <button className="btn badge badge-danger" onClick={this.showDetails}>Hide <FontAwesomeIcon icon="caret-square-up"/></button> 
                                    }

                                {/* <button className="btn badge badge-danger" onClick={this.showDetails}>{this.state.showDetails ? "Read more..." : "Hide"}</button> */}

                                            {contextType.isLoggedIn ? <div>
                                                <a href={`/Events/edit/${item.id}`} className="btn badge badge-danger"><FontAwesomeIcon icon="edit"/> Edit</a>
                                                <a href={`/Events/delete/${item.id}`} className="btn badge badge-danger"><FontAwesomeIcon icon="trash-alt"/> Delete</a>
                                                </div> : ""}
                                </div>

                            </div>                    
            );
    }
}

export default EventsCard;