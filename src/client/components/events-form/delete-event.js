import React from 'react';
import EventCard from '../events/EventCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingSpinner from '../extra/LoadingSpinner';


class DeleteEvent extends React.Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        eventData: null,
        isActive : true
    }

    componentDidMount() {
        const url = '/api/events'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                eventData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }
    deleteEvent = () =>{
        console.log("deleting.....");
        fetch(`/api/events/${this.props.match.params.id}`,{
          method: 'DELETE',
          headers:{
             'Authorization': localStorage.getItem('authToken')
          }
        }).then(res => res.json())
        .then(response=> {
          console.log('deelete :', response);
          this.setState({
            isActive : false
        });
        
        })

    }

    render() {
        if(this.state.isLoading){
            return(     
                <LoadingSpinner/> 
                );
        }
        else if(!this.state.isActive){
            return(
                <div className="container">
                    <h3>Event Successfully Deleted</h3>
                    <br/>
                    <a href={`/Events`} className="btn btn-outline-danger btn-sm"><FontAwesomeIcon icon="caret-square-left"/> Go Back</a>
                </div>);
        }
        else {
            return (     
                    <div className="container">
                        <h2>Are you Sure want to Delete this below Event</h2>
                        <div>
                            <button className="btn btn-outline-danger col-md-3" onClick={this.deleteEvent}>YES</button>
                            <a  href={`/Events`} className="btn btn-outline-danger col-md-3">NO</a>
                        </div>
                        <EventCard eventsData={this.state.eventData}/>
                    </div>        
                );
        }
    }
}

export default DeleteEvent;