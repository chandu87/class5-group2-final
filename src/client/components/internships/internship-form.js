import React, { Component } from 'react';

/*
TODOs
1. Call the server and save the data in the DB
  1.a Turn the form data into json object
  1.b Call the appropriate endpoint
2. Validation
*/
class InternshipForm extends Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                internshipData: this.props.internshipData
            }
        } else {
            this.state = {
                internshipData: {
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
            internshipData: {
                ...this.state.internshipData,
                [name]: value,
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        let url = '', method = '';

        if (this.props.isEditing) {
            url = `/api/internships/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/internship`
            method = 'POST';
        }

        fetch(url, {
        method,
        body: JSON.stringify(this.state.internshipData),
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.text())
        .then(response => {
            console.log('Success:', response)
            // TODO redirect to the internship list page (/internship)
        })
        .catch(error => console.error('Error:', error));
    }

    render () {
        return (
            <form onSubmit={this.submitForm}>
                <h2>
                    {`${this.props.isEditing ? "Edit" : "Add"} Internship`}
                </h2>

                <div>
                    <label>
                        First Name
                        <input name="first_name" value={this.state.internshipData.first_name} onChange={this.updateField} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name
                        <input name="last_name" value={this.state.internshipData.last_name} onChange={this.updateField} />
                    </label>
                </div>
                <div>
                    <label>
                        Internship Description
                        <textarea name="internship_description" value={this.state.internshipData.internship_description} onChange={this.updateField} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default InternshipForm;