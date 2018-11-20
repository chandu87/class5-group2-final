import React from 'react';
import EventsForm from './events-form';

class EditEvent extends React.Component{
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
            <EventsForm {...this.props} eventsData={this.state.eventsData} id={this.props.match.params.id} isEditing={true}/>);
    }
}
export default EditEvent;