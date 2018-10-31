import React, { Component } from 'react';
import MentorForm from './mentor-form';

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <MentorForm {...props} isEditing={true} />
//     )
// }

class EditMentor extends Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        mentorData: null
    }

    componentDidMount() {
        const url = '/api/mentors'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                mentorData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }

    render() {
        return (
            this.state.isLoading ? 
                <div>{this.state.message}</div>
                :
                <MentorForm {...this.props} mentorData={this.state.mentorData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditMentor;