import React from 'react';
import classNames from 'classnames';
import LoginContext from '../../contexts/login';

class EventsListView extends React.Component{
    static contextType = LoginContext;

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
                                <a href={`/Events/details/${item.id}`} className="btn badge badge-danger">Read more...</a>
                                {this.props.isLoggedIn ? <div>
                                    <a href={`/Events/edit/${item.id}`} className="btn badge badge-danger">Edit</a>
                                    <a href={`/Events/delete/${item.id}`} className="btn badge badge-danger">Delete</a>
                                    </div> : ""}
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