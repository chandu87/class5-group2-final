import React from 'react';
import { Link } from "react-router-dom";
import MentorCard from '../mentors/MentorCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MentorForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                mentorData: this.props.mentorData,
                displaySubmitForm : true
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
                },
                displaySubmitForm : true                
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
        console.log("Data from form", this.state.mentorDataData);
        fetch(url, {
            method,
            body: JSON.stringify(this.state.mentorData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then(res => res.text())
        .then(response => {
            console.log('Success:', response)
            this.setState({displaySubmitForm:false});
        })
        .catch(error => console.error('Error:', error));
    }

    render() {
        if(this.state.displaySubmitForm) {
            return (
                <div className="container">
                <form onSubmit={this.submitForm}>
                    <div className='form-group card px-lg-5'>
                        <h2 className='mt-4'>
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

                        <div className="row">
                            <div className="col">
                                <label>
                                    Profile Picture
                                    <input className='form-control mb-2 mr-sm-2 mb-sm-0' type='url' name="profile_picture" value={this.state.mentorData.profile_picture} onChange={this.updateField} />
                                </label>
                            </div>
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

                        <div className="form-group form-check">
                            <input type="checkbox" name="active" value={this.state.mentorData.active} onChange={this.updateField} className="form-check-input" id="checkActiveStatus" required/>
                            <label className="form-check-label" htmlFor="checkActiveStatus">Agree to submit data</label>
                        </div>

                        <div className='mb-4 mt-3'>
                            <button className='btn btn-outline-danger btn-sm' type="submit">Submit</button>
                            <Link to="/Mentors" className='btn btn-outline-danger btn-sm' type="cancel">Cancel</Link>
                        </div>

                    </div>
                </form>
                </div>
            )
        } else {
            return(

                <div className="container">
                    <h1>{`Successfully ${this.props.isEditing ? "Edited" : "Added"} Mentor`}</h1>
                    <br/>
                    <button className="btn btn-outline-danger btn-sm mb-4" onClick={this.displaySubmitForm}><FontAwesomeIcon icon="edit"/> Edit</button> 
                    <Link to="/Mentors/add" className="btn btn-outline-danger btn-sm mb-4 pull-right"><FontAwesomeIcon icon="plus"/> Add New</Link>
                    <Link to={`/Mentors`} className="btn btn-outline-danger btn-sm mb-4 pull-right"><FontAwesomeIcon icon="caret-square-left"/>  Go Back</Link>
                    <MentorCard mentorItem={this.state.mentorData}/>
                </div>                

            )
        }
    }
}

export default MentorForm;