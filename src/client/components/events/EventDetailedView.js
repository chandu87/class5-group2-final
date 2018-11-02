import React from 'react';
import EventCard from './EventCard';

class EventDetailedView extends React.Component{
    state = {
        isLoading: true,
        message: 'Hang in there...',
        eventsData: null
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
                eventsData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }


    render(){
        return(
            this.state.isLoading ? 
            <div>{this.state.message}</div>
            :
            <div><EventCard eventsData={this.state.eventsData} displayEditBtns={false}/>
            <a className="btn btn-outline-danger btn-lg btn-block mentor-add-button" href="/Events">Go back to Events</a>
        </div>

        );
    }
}
export default EventDetailedView;