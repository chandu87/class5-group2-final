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
        mentorData: null
    }

    componentDidMount() {
        const url = '/api/mentors'
        const id = this.props.match.params.id;

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                mentorData: data
            })
        )
    }

    render() {
        return (
            this.state.isLoading ? 
                <div>Hang in there...</div>
                :
                <MentorForm {...this.props} mentorData={this.state.mentorData}  isEditing={true} />
        )
    }
}

export default EditMentor;