import React from 'react';
import { Link } from "react-router-dom";
import InternshipCard from '../internships/InternshipCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InternshipForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                internshipData: this.props.internshipData,
                displaySubmitForm : true
            }
        } else {
            this.state = {
                internshipData: {
                    "internship_title": "",
                    "internship_category": "",
                    "organisation_name": "",
                    "department": "",
                    "internship_description": "",
                    "organisation_description": "",
                    "internship_agreement": 1,
                    "internship_requirements": 1,
                    "application_requirements": "",
                    "internship_availabiltiy_schedule": "",
                    "travel_expenses": 1,
                    "location": "",
                    "internship_add_date": "",
                    "closing_date": 1,
                    "internship_deadline": "",
                    "contact_person": "",
                    "phone_contact": "",                    
                    "email_contact": "",
                    "organisation_address": "",
                    "organisation_website": "",
                    "internship_theme_image": "",                    
                   "active": 1
                },
                displaySubmitForm : true
            }
        }
    }

    updateField = (e) => {
        const { name,value } = e.target;

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
            url = `/api/internships`
            method = 'POST';
        }
        console.log("Data from form", this.state.internshipData);
        fetch(url, {
            method,
            body: JSON.stringify(this.state.internshipData),
            headers:{
                'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authToken')
            }
        })
        .then(res => res.text())
        .then(response => {
            console.log('Success:', response),
            this.setState({displaySubmitForm:false});
        })
        .catch(error => console.error('Error:', error));
    }

    render () {
        if(this.state.displaySubmitForm) {
            return (
                <div className="container form-container"> 
                <form className="form-submit" onSubmit={this.submitForm}>
                    <h2 className="form-h2 text-center">
                        {`${this.props.isEditing ? "Edit" : "Add"} Internship`}
                    </h2>
                    <hr className="hr-style3"/>

                    <div className="form-group">
                        <label htmlFor="internship_title">
                            Internship Title
                        </label>
                        <input type="text" className="form-control" id="internship_title" name="internship_title" value={this.state.internshipData.internship_title} onChange={this.updateField} />
                    </div>    
                    <div className="form-group">
                        <label htmlFor="internship_category">
                            Internship Category
                        </label>
                        <input type="text" className="form-control" id="internship_category" name="internship_category" value={this.state.internshipData.internship_category} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_description">
                            Internship Description
                        </label>
                        <textarea type="text" className="form-control" id="internship_description" name="internship_description" value={this.state.internshipData.internship_description} onChange={this.updateField} maxLength="400" rows="2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_name">
                            Organization Name
                        </label>
                        <input type="text" className="form-control" id="organisation_name" name="organisation_name" value={this.state.internshipData.organisation_name} onChange={this.updateField} maxLength="100" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">
                            Department 
                        </label>
                        <input type="text" className="form-control" id="department" name="department" value={this.state.internshipData.department} onChange={this.updateField} maxLength="100"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_description">
                            Organization Description
                        </label>
                        <textarea type="text" className="form-control" id="organisation_description" name="organisation_description" value={this.state.internshipData.organisation_description} onChange={this.updateField} maxLength="400" rows="3"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="internship_agreement" name="internship_agreement" value={this.state.internshipData.internship_agreement} onChange={this.updateField} />
                                <label className="form-check-label" htmlFor="internship_agreement">
                                    Internship Agreement
                                </label>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="internship_requirements" name="internship_requirements" value={this.state.internshipData.internship_requirements} onChange={this.updateField} />                            
                                <label className="form-check-label" htmlFor="internship_requirements">
                                    Internship Requirements
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="application_requirements">
                            Application Requirements
                        </label>
                        <input type="text" className="form-control" id="application_requirements" name="application_requirements" value={this.state.internshipData.application_requirements} onChange={this.updateField} maxLength="100" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_availability_schedule">
                            Availability Schedule 
                        </label>
                        <input type="text" className="form-control" id="internship_availabiltiy_schedule" name="internship_availabiltiy_schedule" value={this.state.internshipData.internship_availabiltiy_schedule} onChange={this.updateField} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="travel_expenses" name="travel_expenses" value={this.state.internshipData.travel_expenses} onChange={this.updateField} />                    
                        <label htmlFor="travel_expenses">
                            Travel Expenses
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">
                            location
                        </label>
                        <input type="text" className="form-control" id="location" name="location" value={this.state.internshipData.location} onChange={this.updateField} />
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="internship_add_date">
                                    Internship Publish Date
                                </label>
                                <input text="date" className="form-control" id="internship_add_date" name="internship_add_date" value={this.state.internshipData.internship_add_date} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="internship_deadline">
                                    Internship Deadline
                                </label>
                                <input type="text" className="form-control"  id="internship_deadline" name="internship_deadline" value={this.state.internshipData.internship_deadline} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="closing_date" name="closing_date" value={this.state.internshipData.closing_date} onChange={this.updateField} />                            
                            <label htmlFor="closing_date">
                                Closing Date
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact_person">
                            Contact Person
                        </label>
                        <input type="text" className="form-control" id="contact_person" name="contact_person" value={this.state.internshipData.contact_person} onChange={this.updateField} />
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="phone_contact">
                                    Phone Contact 
                                </label>
                                <input type="tel" className="form-control" id="phone_contact" name="phone_contact" value={this.state.internshipData.phone_contact} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="email_contact">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="email_contact" name="email_contact" value={this.state.internshipData.email_contact} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="organisation_address">
                                    Organization Address
                                </label>
                                <input type="text" className="form-control" id="organisation_address" name="organisation_address" value={this.state.internshipData.organisation_address} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="organisation_website">
                                    Organization Website
                                </label>
                                <input type="url" className="form-control" id="organisation_website" name="organisation_website" value={this.state.internshipData.organisation_website} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_theme_image">
                            Internship Theme Image
                        </label>
                        <input type="url" className="form-control" id="internship_theme_image" name="internship_theme_image" value={this.state.internshipData.internship_theme_image} onChange={this.updateField} />
                    </div>
    
                    <div className="form-group form-check">
                        <input type="checkbox" name="active" value={this.state.internshipData.active} onChange={this.updateField} className="form-check-input" id="checkActiveStatus" required/>
                        <label className="form-check-label" htmlFor="checkActiveStatus">Agree to Submit data</label>
                    </div>

                    <button type="submit" className="btn btn-outline-danger btn-sm">Submit</button>
                    <Link to={`/Internships`} className="btn btn-outline-danger btn-sm">Cancel</Link>

                </form>
                </div>
            )    
        } else {
            return(

                <div className="container">
                    <h1>{`Successfully ${this.props.isEditing ? "Edited" : "Added"} Internship`}</h1>
                    <br/>
                    <Link to="/Internships/add" className="btn btn-outline-danger btn-sm mb-4 pull-right"><FontAwesomeIcon icon="plus"/> Add New</Link>
                    <button className="btn btn-outline-danger btn-sm mb-4 pull-right" onClick={this.displaySubmitForm}><FontAwesomeIcon icon="edit"/> Edit</button> 
                    <Link to={`/Internships`} className="btn btn-outline-danger btn-sm mb-4"><FontAwesomeIcon icon="caret-square-left"/> Go Back</Link>
                    <InternshipCard internshipItem={this.state.internshipData} displayFooter={false}/>
                </div>                

            )
        }
    }
}

export default InternshipForm;