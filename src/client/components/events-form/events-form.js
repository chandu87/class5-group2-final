import React from 'react';
import EventCard from '../events/EventCard';

class EventsForm extends React.Component{
    constructor(props){
        super(props);
        if (this.props.isEditing) {
        this.state = {
            eventsData : this.props.eventsData,
            displaySubmitForm : false,
            displayDetailsCard:true,
            isActive : true
        }
    }else{
        this.state = 
            {
                eventsData : {
                    "contact_email": "",
                    "contact_person": "",
                    "contact_phone": "",
                    "event_URL": "",
                    "event_address": "",
                    "event_agenda": "",
                    "event_city": "",
                    "event_end_date": "",
                    "event_end_hour": "",
                    "event_geo_lat": 0,
                    "event_geo_lng": 0,
                    "event_language": "",
                    "event_name": "",
                    "event_postal_code": "",
                    "event_start_date": "",
                    "event_start_hour": "",
                    "event_theme_image": "",
                    "event_type": "",
                    "max_participants": "",
                    "active": "1"
                },
                displaySubmitForm : true,
                displayDetailsCard: false,
                isActive: true
            }

    }
    }
    updateField = (e) =>{
        const {name, value} = e.target;
        this.setState({
            eventsData : {
                ...this.state.eventsData, 
                [name]: value
            }
        })
    }
    displayForm = () =>{
        this.setState({
            displaySubmitForm : true
        })
    }
    deleteEvent = () =>{
        console.log("deleting.....");
        fetch(`/api/events/${this.props.match.params.id}`,{
          method: 'DELETE'
        }).then(res => res.json())
        .then(response=> {
          console.log('deelete :', response);
          this.setState({
            isActive : false
        });
        
        })

    }
    submitForm = (e) =>{
        e.preventDefault();
        console.log(this.state.eventsData);
        let url = '', method = '';
        if(this.props.isEditing){
            url = `/api/events/${this.props.match.params.id}`;
            method = 'PUT';
        }else{
            url='/api/events';
            method = 'POST';
            console.log("POST request");
        }
        fetch(url, {
            method,
            body: JSON.stringify(this.state.eventsData), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => {
                console.log("res : ",  res);
                return res.json()
            })
          .then(response => {
              console.log('Success:', response);
              // Redirect to homepage "/" route
              // TODO Maybe show a success message (using a library) -it could disappear after few seconds-
            //   this.props.history.push('/Events');
              // TODO only if editing, change the page to details
            //   this.props.history.push(`/Events/details/${this.}`);

              this.setState({
                  displaySubmitForm : false,
                  displayDetailsCard: false
              });
            })
            
          .catch(error => console.error('Error:', error));
    }
    render(){
        if(this.state.displaySubmitForm && this.state.isActive){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="event_name">Event Name *</label>
                        <input type="text" name="event_name" value={this.state.eventsData.event_name} onChange={this.updateField} className="form-control" id="event_name" aria-describedby="nameHelp" placeholder="Enter Name" required/>
                        <small id="nameHelp" className="form-text text-muted">We'll share your details with all the people who access this portal.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="event_agenda">Event Agenda *</label>
                        <textarea type="text" name="event_agenda" value={this.state.eventsData.event_agenda} onChange={this.updateField} className="form-control form-control-lg" id="event_agenda" placeholder="Enter Event Agenda" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event_type">Event type</label>
                        <input type="text" name="event_type" value={this.state.eventsData.event_type} onChange={this.updateField} className="form-control" id="event_type" placeholder="Enter Event type"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event_URL">Event URL</label>
                        <input type="text" name="event_URL" value={this.state.eventsData.event_URL} onChange={this.updateField} className="form-control form-control-sm" id="event_URL" placeholder="Enter Event URL"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event_address">Event Address</label>
                        <input type="text" name="event_address" value={this.state.eventsData.event_address} onChange={this.updateField} className="form-control form-control-sm" id="event_address" placeholder="Enter Event Address"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_city">Event City</label>
                                <input type="text" name="event_city" value={this.state.eventsData.event_city} onChange={this.updateField} className="form-control form-control-sm" id="event_city" placeholder="Enter City"/>
                            </div>
                        </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="event_postal_code">Event Postal Code</label>
                                    <input type="text" name="event_postal_code" value={this.state.eventsData.event_postal_code} onChange={this.updateField} className="form-control form-control-sm" id="event_postal_code" placeholder="Enter Postal code"/>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_geo_lat">Event Geo-lat *</label>
                                <input type="text" name="event_geo_lat" value={this.state.eventsData.event_geo_lat} onChange={this.updateField} className="form-control form-control-sm" id="event_geo_lat" placeholder="Enter Event Geo_lat" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_geo_lng">Event Geo-lng *</label>
                                <input type="text" name="event_geo_lng" value={this.state.eventsData.event_geo_lng} onChange={this.updateField} className="form-control form-control-sm" id="event_geo_lng" placeholder="Enter Event Geo_lng" required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_start_date">Event Start Date *</label>
                                <input type="date" name="event_start_date" value={this.state.eventsData.event_start_date} onChange={this.updateField} className="form-control form-control-sm" id="event_start_date" placeholder="Enter Start date" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_start_hour">Event Start Hour *</label>
                                <input type="time" name="event_start_hour" value={this.state.eventsData.event_start_hour} onChange={this.updateField} className="form-control form-control-sm" id="event_start_hour" placeholder="Enter Start hour" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_end_date">Event End Date *</label>
                                <input type="date" name="event_end_date" value={this.state.eventsData.event_end_date} onChange={this.updateField} className="form-control form-control-sm" id="event_end_date" placeholder="Enter End date" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_end_hour">Event End Hour *</label>
                                <input type="time" name="event_end_hour" value={this.state.eventsData.event_end_hour} onChange={this.updateField} className="form-control form-control-sm" id="event_end_hour" placeholder="Enter End hour " required/>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event_language">Event Language *</label>
                                <input type="text" name="event_language" value={this.state.eventsData.event_language} onChange={this.updateField} className="form-control form-control-sm" id="event_language" placeholder="Enter event language" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="max_participants">Event Max participants</label>
                                <input type="text" name="max_participants" value={this.state.eventsData.max_participants} onChange={this.updateField} className="form-control form-control-sm" id="max_participants" placeholder="Enter max_participants"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="event_theme_image">Event Theme image</label>
                        <input type="text" name="event_theme_image" value={this.state.eventsData.event_theme_image} onChange={this.updateField} className="form-control form-control-sm" id="event_theme_image" placeholder="Enter event theme image"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact_person">Event Contact person *</label>
                        <input type="text" name="contact_person" value={this.state.eventsData.contact_person} onChange={this.updateField} className="form-control form-control-sm" id="contact_person" placeholder="Enter contact person" required/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="contact_email">Event Contact Email *</label>
                                <input type="email" name="contact_email" value={this.state.eventsData.contact_email} onChange={this.updateField} className="form-control form-control-sm" id="contact_email" placeholder="Enter contact email" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="contact_phone">Event Contact Phone</label>
                                <input type="tel" name="contact_phone" value={this.state.eventsData.contact_phone} onChange={this.updateField} className="form-control form-control-sm" id="contact_phone" placeholder="Enter contact phone"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="active" value={this.state.eventsData.active} onChange={this.updateField} className="form-check-input" id="checkActiveStatus" required/>
                        <label className="form-check-label" htmlFor="checkActiveStatus">Agree to make data active</label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-outline-danger btn-sm col-md-2">Submit</button>
                    <a className="btn btn-outline-danger btn-sm col-md-2" href="/Events">Cancel</a>
                </form>
            </div>
        );
    }else if(this.state.displayDetailsCard && this.state.isActive){
        return(
            <div>
                <div>
                    <button className="col-md-2 btn btn-outline-danger btn-sm" onClick={this.displayForm}>Edit Event</button>
                    <button className="col-md-2 btn btn-outline-danger btn-sm" onClick={this.deleteEvent}>Delete Event</button>
                    <a className="col-md-4 btn btn-outline-danger btn-sm network-edit-button" href="/Events">Go back to Events</a>
                </div>
                <EventCard eventsData={this.state.eventsData}/>
            </div>
            );
    }else if(!this.state.isActive){
        return(
            <div className="container">
                <h3>Event is Successfully Deleted</h3>
                <br/>
                <a className="btn btn-outline-danger btn-sm" href="/Events">Go back to Events</a>
                <a className="btn btn-outline-danger btn-sm" href="/Events/add">Add New Event</a>

            </div>
            );
    }
    else{
        return(
            <div>    
                <h1>{`Successfully ${this.props.isEditing ? "Edited" : "Added"} Event`}</h1>
                <br/>
                <div>
                <button className="col-md-2 btn btn-outline-danger btn-sm" onClick={this.displayForm}>Edit Event</button>
                <button className="col-md-2 btn btn-outline-danger btn-sm" onClick={this.deleteEvent}>Delete Event</button>

                    <a className="btn btn-outline-danger btn-sm network-edit-button" href="/Events/add">Add New Event</a>
                    <a className="btn btn-outline-danger btn-sm network-edit-button" href="/Events">Go back to Events</a>
                </div>
                <EventCard eventsData = {this.state.eventsData}/>

            </div>);
        }
    }
}
export default EventsForm;