import React, { Component } from 'react';
import { Link } from "react-router-dom";

class InternshipForm extends Component {
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
                    "closing_date": "",
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
        console.log("Data from form", this.state.internshipData);
        fetch(url, {
        method,
        body: JSON.stringify(this.state.internshipData),
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.text())
        .then(response => {
            console.log('Success:', response),
            this.setState({displaySubmitForm:false});
        })
        .catch(error => console.error('Error:', error));
    }

    render () {
        if(this.state.displaySubmitForm) {
            return (
                <form onSubmit={this.submitForm}>
                    <h2>
                        {`${this.props.isEditing ? "Edit" : "Add"} Internship`}
                    </h2>
    
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="created_at">Created Date</label>
                                <input className="form-control" name="created_at" value={this.state.internshipData.created_at} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="updated_at">
                                    Updated Date
                                </label>
                                <input className="form-control" name="updated_at" value={this.state.internshipData.updated_at} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_description">
                            Internship Description
                        </label>
                        <textarea className="form-control" name="internship_description" value={this.state.internshipData.internship_description} onChange={this.updateField} rows="2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_category">
                            Internship Category
                        </label>
                        <input className="form-control" name="internship_category" value={this.state.internshipData.internship_category} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_name">
                            Organization Name
                        </label>
                        <input className="form-control" name="organisation_name" value={this.state.internshipData.organisation_name} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">
                            Department 
                        </label>
                        <input className="form-control" name="department" value={this.state.internshipData.department} onChange={this.updateField} rows="2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_description">
                            Organization Description
                        </label>
                        <textarea className="form-control" name="organisation_description" value={this.state.internshipData.organisation_description} onChange={this.updateField} rows="3"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="internship_agreement">
                                    Internship Agreement
                                </label>
                                <input className="form-control" name="internship_agreement" value={this.state.internshipData.internship_agreement} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="internship_requirements">
                                    Internship Requirements
                                </label>
                                <input className="form-control" name="internship_requirements" value={this.state.internshipData.internship_requirements} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="application_requirements">
                            Application Requirements
                        </label>
                        <input className="form-control" name="application_requirements" value={this.state.internshipData.application_requirements} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_availability_schedule">
                            Availability Date 
                        </label>
                        <input className="form-control" name="internship_availability_schedule" value={this.state.internshipData.internship_availability_schedule} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="travel_expenses">
                            Travel Expenses
                        </label>
                        <input className="form-control" name="travel_expenses" value={this.state.internshipData.travel_expenses} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">
                            location
                        </label>
                        <input className="form-control" name="location" value={this.state.internshipData.location} onChange={this.updateField} />
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="internship_add_date">
                                    Internship Publish Date
                                </label>
                                <input className="form-control" name="internship_add_date" value={this.state.internshipData.internship_add_date} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="closing_date">
                                    Closing Date
                                </label>
                                <input className="form-control" name="closing_date" value={this.state.internshipData.created} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="internship_deadline">
                                    Internship Deadline
                                </label>
                                <input className="form-control" name="internship_deadline" value={this.state.internshipData.internship_deadline} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact_person">
                            Contact Person
                        </label>
                        <input className="form-control" name="contact_person" value={this.state.internshipData.contact_person} onChange={this.updateField} />
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="phone_contact">
                                    Phone Contact 
                                </label>
                                <input className="form-control" name="phone_contact" value={this.state.internshipData.phone_contact} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="email_contact">
                                    Email
                                </label>
                                <input className="form-control" name="email_contact" value={this.state.internshipData.email_contact} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="organisation_address">
                                    Organization Address
                                </label>
                                <input className="form-control" name="organisation_address" value={this.state.internshipData.organisation_address} onChange={this.updateField} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="organisation_website">
                                    Organization Website
                                </label>
                                <input className="form-control" name="organisation_website" value={this.state.internshipData.organisation_website} onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="internship_theme_image">
                            Internship Theme Image
                        </label>
                        <input className="form-control" name="internship_theme_image" value={this.state.internshipData.internship_theme_image} onChange={this.updateField} />
                    </div>
    
    
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            )    
        } else {
            return(

                <div key={this.state.internshipData.id} className="card mb-4">
        
                <div className="card-header">
                <h5 className="card-title">{this.state.internshipData.internship_title}</h5>
               
                </div>
                <div className="card-body">
                  <div className="row">
                      <div className="col-md-8">
                              <p className="card-text">{this.state.internshipData.internship_description}</p>
                          <p className="card-text">Place : {this.state.internshipData.location}</p>
                          <Link to="#" className="btn btn-danger">
                            Read more...
                          </Link>
                      </div>
                      <div className="col-md-4">
                          <img
                        className="internship-image rounded"
                        src={this.state.internshipData.internship_theme_image}
                        alt={this.state.internshipData.internship_title}
                        />
                      </div>
        
                  </div>
        
                </div>
                <div className="card-footer">
                  <Link to={`/Internships/edit/${this.state.internshipData.id}`} className="btn btn-outline-danger network-edit-button btn-sm"> Edit</Link>
                  <Link to={`/Internships/delete/${this.state.internshipData.id}`} className="btn btn-outline-danger btn-sm">Delete</Link>
                  </div>        
              </div>
            )
        }
    }
}

export default InternshipForm;