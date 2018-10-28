import React, { Component } from 'react';

/*
TODOs
1. Call the server and save the data in the DB
  1.a Turn the form data into json object
  1.b Call the appropriate endpoint
2. Validation
*/
class MentorForm extends Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                mentorData: this.props.mentorData
            }
        } else {
            this.state = {
                mentorData: {
                    "first_name": "",
                    "last_name": "",
                    "email": "",
                    "gender": "",
                    "profile_picture": "",
                    "mentor_description": "",
                    "languages": "",
                    "availability": "",
                    "offering": "",
                    "area_location": "",
                    "preferred_meeting_place": "",
                    "affiliation": "",
                    "active": 1
                }
            }
        }
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState({
            mentorData: {
                ...this.state.mentorData,
                [name]: value,
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        let url = '', method = '';

        if (this.props.isEditing) {
            url = `/api/mentors/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/mentors`
            method = 'POST';
        }

        fetch(url, {
        method,
        body: JSON.stringify(this.state.mentorData),
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.text())
        .then(response => {
            console.log('Success:', response)
            // TODO redirect to the Mentors list page (/Mentors)
        })
        .catch(error => console.error('Error:', error));
    }

    render () {
        return (
            <form onSubmit={this.submitForm}>
                <h2>
                    {`${this.props.isEditing ? "Edit" : "Add"} Mentor`}
                </h2>

                <div>
                    <label>
                        First Name
                        <input name="first_name" value={this.state.mentorData.first_name} onChange={this.updateField} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name
                        <input name="last_name" value={this.state.mentorData.last_name} onChange={this.updateField} />
                    </label>
                </div>
                <div>
                    <label>
                        Mentor Description
                        <textarea name="mentor_description" value={this.state.mentorData.mentor_description} onChange={this.updateField} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default MentorForm;