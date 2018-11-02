import React from 'react';

class EventsListView extends React.Component{
    render(){
        console.log(this.props.events);
        const events = this.props.events;
        return(
                <div className="row">
                    <div className="list-group">
                    {events.map(item =>  (
                            <div key={item.id} className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.event_name}</h5>
                                <small>{item.event_language}</small>
                                </div>
                                <p className="mb-1">{item.event_agenda}</p>
                                <small>Category : {item.event_type}</small>
                                <div>
                                <small>Date : <strong>From</strong> {item.event_start_date} - {item.event_start_hour} 
                                <strong> To </strong>{item.event_end_date} - {item.event_end_hour}</small>
                                <div className="d-flex w-100 justify-content-between">
                                <a href={`/Events/details/${item.id}`} className="badge badge-info">Read more...</a>
                                <a href={`/Events/edit/${item.id}`} className="badge badge-danger">Edit</a>
                                </div>
                                </div>
                            </div>
                            ))
                    }
                    </div>            
                </div>
            );
    }
}

export default EventsListView;