import React from 'react';

class EventCard extends React.Component{
    render(){
        const item = this.props.eventsData;
        console.log("-------------",item);
        return(
            <div>
            <br/>
            <div key={item.id} className="card mb-4 networking-item">
            <div className="card-header">
            <h2 className="card-title pricing-card-title"> {item.event_name}</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                    <div><strong>Org. Address: </strong> {item.event_address}</div>
                    <div><strong>City: </strong> {item.event_city}</div>
                    <div><strong>Postal Code: </strong> {item.event_postal_code}</div>
                    <div><strong>Contact Person:</strong> {item.contact_person}</div>
                    <div><strong>Contact Email:</strong> {item.contact_email}</div>
                    <div><strong>Contact Phone: </strong> {item.contact_phone}</div>
                    <div><strong>Event URL: </strong> {item.event_URL}</div>
                    <div><strong>Event Agenda: </strong> {item.event_agenda}</div>
                    <div><strong>Start Date: </strong> {item.event_start_date}</div>
                    <div><strong>Start Hour: </strong> {item.event_start_hour}</div>
                    <div><strong>End Date: </strong> {item.event_end_date}</div>
                    <div><strong>End Hour: </strong> {item.event_end_hour}</div>
                    <div><strong>Even Geo lattitude: </strong> {item.event_geo_lat}</div>
                    <div><strong>Event Geo langitude: </strong> {item.event_geo_lng}</div>
                    <div><strong>Event Language: </strong> {item.event_language}</div>
                    <div><strong>Event Type: </strong> {item.event_type}</div>
                    <div><strong>Max participants: </strong> {item.max_participants}</div>
                </div>
                <div className="col-md-4">
                  <img className="my-0 font-weight-normal networking-image" src={item.event_theme_image} width="100%" alt="Organization Logo"/>
                </div>
              </div>
            </div>
            {/* { this.props.displayEditBtns ?             <div className="card-footer">
                <a href={`/Events/edit/${item.id}`} className="btn btn-outline-danger btn-sm"> Update</a>
                <a href={`/Events/edit/${item.id}`} className="btn btn-outline-danger network-edit-button btn-sm"> Delete</a>
            </div> : <li>No Edit mode</li>} */}

          </div>
        </div>
        );
    }
}
export default EventCard;