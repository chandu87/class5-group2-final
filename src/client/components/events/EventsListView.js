import React from 'react';

class EventsListView extends React.Component{
    render(){
        console.log(this.props.events);
        const events = this.props.events;
        return(
                <div className="row">
                    <div className="list-group">
                    {events.map(event =>  (
                            <a key={event.id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{event.internship_title}</h5>
                                <small>{event.internship_deadline}</small>
                                </div>
                                <p className="mb-1">{event.internship_description}</p>
                                <small>Category : {event.internship_category}</small>
                            </a>
                            ))
                    }
                    </div>            
                </div>
            );
    }
}

export default EventsListView;