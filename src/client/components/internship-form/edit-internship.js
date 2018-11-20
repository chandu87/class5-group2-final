import React from 'react';
import InternshipForm from './internship-form';

class EditInternship extends React.Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        internshipData: null
    }

    componentDidMount() {
        const url = '/api/internships'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                internshipData: data
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
                <InternshipForm {...this.props} internshipData={this.state.internshipData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditInternship;