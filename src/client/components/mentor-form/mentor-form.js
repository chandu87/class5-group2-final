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
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text())
            .then(response => {
                console.log('Success:', response)
                // TODO redirect to the Mentors list page (/Mentors)
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className='form-group card px-lg-5'>
                    <h2 className='card-header mt-4'>
                        {`${this.props.isEditing ? "Edit" : "Add"} Mentor`}
                    </h2>
                    <div className='row mt-4'>

                        <div className='col'>
                            <label>
                                First Name
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0' name="first_name" value={this.state.mentorData.first_name} onChange={this.updateField} />
                            </label>
                        </div>
                        <div className='col'>
                            <label>
                                Last Name
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0' name="last_name" value={this.state.mentorData.last_name} onChange={this.updateField} />
                            </label>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label>
                                Email
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0 ' name="email" value={this.state.mentorData.email} onChange={this.updateField} />
                            </label>
                        </div>

                        <div className='col'>
                            <label>
                                Gender
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0 ' name="gender" value={this.state.mentorData.gender} onChange={this.updateField} />
                            </label>
                        </div>
                    </div>
                    <div mt-3>
                        <label className=' mt-3'>
                            Profile Picture
                            <input className='form-control-file' type='file' name="profile_picture" value={this.state.mentorData.profile_picture} onChange={this.updateField} />
                        </label>
                    </div>
                    <div>
                        <label className=' mt-3'>
                            Mentor Description
                        <textarea className='form-control' rows='3' cols='67' name="mentor_description" value={this.state.mentorData.mentor_description} onChange={this.updateField} />
                        </label>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label>
                                Languages
                                <input className='form-control' name="languages" value={this.state.mentorData.languages} onChange={this.updateField} />
                            </label>
                        </div>
                        <div className='col'>
                            <label>
                                Availability
                                <input className='form-control' name="availability" value={this.state.mentorData.availability} onChange={this.updateField} />
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>
                                Offering
                                <input className='form-control' name="offering" value={this.state.mentorData.offering} onChange={this.updateField} />
                            </label>
                        </div>
                        <div className='col'>
                            <label>
                                Area Location
                                <input className='form-control' name="area_location" value={this.state.mentorData.area_location} onChange={this.updateField} />
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label>
                                Preferred Meeting Place
                            <input className='form-control' name="preferred_meeting_place" value={this.state.mentorData.preferred_meeting_place} onChange={this.updateField} />
                            </label>
                        </div>
                        <div className='col'>
                            <label>
                                Affiliation
                            <input className='form-control' name="affiliation" value={this.state.mentorData.affiliation} onChange={this.updateField} />
                            </label>
                        </div>
                    </div>
                    <div className='mb-4 mt-3'>
                        <button className='btn btn-warning' type="submit">Save</button>
                        <button className='btn btn-primary ml-4' type="cancel">Cancel</button>
                    </div>

                </div>
            </form>

        )
    }
}

export default MentorForm;