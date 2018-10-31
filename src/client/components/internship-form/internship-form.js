import React, { Component } from 'react';

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
                    "id": "",
                    "created_at": "",
                    "updated_at": "",
                    "internship_title": "",
                    "internship_category": "",
                    "organisation_name": "",
                    "department": "",
                    "internship_description": "",
                    "organisation_description": "",
                    "internship_agreement": "",
                    "internship_requirements": "",
                    "application_requirements": "",
                    "internship_availability_schedule": "",
                    "travel_expenses": "",
                    "location": "",
                    "internship_add_date": "",
                    "internship_deadline": "",
                    "contact_person": "",
                    "phone_contact": "",                    
                    "email_contact": "",
                    "organisation_address": "",
                    "organisation_website": "",
                    "internship_theme_image": "",                    
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
            url = `/api/internships`
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

                <div class="form-group">
                    <label>
                        Created Date
                        <input  class="form-control" name="create_at" value={this.state.internshipData.created_at} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Updated Date
                        <input name="updated_at" value={this.state.internshipData.updated_at} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Description
                        <textarea name="internship_description" value={this.state.internshipData.internship_description} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Category
                        <input name="internship_category" value={this.state.internshipData.internship_category} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Organization Name
                        <input name="organisation_name" value={this.state.internshipData.organisation_name} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Department 
                        <textarea name="department" value={this.state.internshipData.department} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Description
                        <input name="internship_description" value={this.state.internshipData.internship_description} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Organization Description
                        <input name="organisation_description" value={this.state.internshipData.organisation_description} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Agreement
                        <textarea name="internship_agreement" value={this.state.internshipData.internship_agreement} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Requirements
                        <input name="internship_requirements" value={this.state.internshipData.internship_requirements} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Application Requirements
                        <input name="application_requirements" value={this.state.internshipData.application_requirements} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Availability Date 
                        <textarea name="internship_availability_schedule" value={this.state.internshipData.internship_availability_schedule} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Travel Expenses
                        <input name="travel_expenses" value={this.state.internshipData.travel_expenses} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        location
                        <input name="location" value={this.state.internshipData.location} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Publish Date
                        <textarea name="internship_add_date" value={this.state.internshipData.internship_add_date} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Deadline
                        <input name="internship_deadline" value={this.state.internshipData.internship_deadline} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Contact Person
                        <input name="contact_person" value={this.state.internshipData.contact_person} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Phone Contact 
                        <textarea name="phone_contact" value={this.state.internshipData.phone_contact} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Email
                        <input name="email_contact" value={this.state.internshipData.email_contact} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Organization Address
                        <input name="organisation_address" value={this.state.internshipData.organisation_address} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Organization Website
                        <textarea name="organisation_website" value={this.state.internshipData.organisation_website} onChange={this.updateField} />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        Internship Theme Image
                        <input name="internship_theme_image" value={this.state.internshipData.internship_theme_image} onChange={this.updateField} />
                    </label>
                </div>


                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default InternshipForm;