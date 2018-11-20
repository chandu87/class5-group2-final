import React from 'react';
import EventsForm from './events-form';

class AddEvent extends React.Component{
    render(){
        return(<EventsForm {...this.props} isEditing={false}/>);
    }
}
export default AddEvent;