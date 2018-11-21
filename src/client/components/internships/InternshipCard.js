import React from 'react';
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';

class InternshipCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : true
        }
    }
    showDetails = ()=>{
        this.setState({
            showDetails : !this.state.showDetails
        });
    }

    render(){
        const contextType = LoginContext._currentValue;
        const item = this.props.internshipItem;
        // console.log('card details',item);
        const contextType = LoginContext._currentValue;

        return(
                <div key={item.id} className="card mb-4 card-as-link">
                    <div className="card-header">
                        <h2 className="card-title pricing-card-title"> {item.internship_title}</h2>
                    </div>
                    <div className="card-body">
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <img className="my-0 font-weight-normal networking-image img-non-responsive" src={item.internship_theme_image} width="100%" alt={item.application_requirements} />
                            </div>
                        </div>
                        <dl className="row">
                            <dt className="col-sm-3">Internship Category</dt> 
                            <dd className="col-sm-9"> {item.internship_category}</dd>
                            <dt className="col-sm-3">Organization Name</dt>
                            <dd className="col-sm-9"> {item.organisation_name}</dd>
                            <dt className="col-sm-3">Location </dt> <dd className="col-sm-9"> {item.location}</dd>

                            {this.state.showDetails ? "" : 
                            <div>
                                <dt className="col-sm-3">Department</dt> 
                                <dd className="col-sm-9">{item.department}</dd>
                                <dt className="col-sm-3">Internship Description</dt> 
                                <dd className="col-sm-9">{item.internship_description}</dd>
                                <dt className="col-sm-3">Organisation Description </dt> <dd className="col-sm-9"> {item.organisation_description}</dd>
                                <dt className="col-sm-3">Application Requirement </dt> <dd className="col-sm-9"> {item.application_requirements}</dd>
                                <dt className="col-sm-3">Internship Availability Schedule </dt> <dd className="col-sm-9"> {item.internship_availabiltiy_schedule}</dd>
                                <dt className="col-sm-3">Internship Publish Date </dt> <dd className="col-sm-9"> {item.internship_add_date}</dd>
                                <dt className="col-sm-3">Internship Deadline</dt> <dd className="col-sm-9"> {item.internship_deadline}</dd>
                                <dt className="col-sm-3">Contact Person </dt> <dd className="col-sm-9"> {item.contact_person}</dd>
                                <dt className="col-sm-3">Phone Contact </dt> <dd className="col-sm-9"> {item.phone_contact}</dd>
                                <dt className="col-sm-3">Email Contact </dt> <dd className="col-sm-9"> {item.email_contact}</dd>
                                <dt className="col-sm-3">Organization Address </dt> <dd className="col-sm-9"> {item.organisation_address}</dd>
                                <dt className="col-sm-3">Organization Website </dt> <dd className="col-sm-9"> {item.organisation_website}</dd>
                            </div>}
                            <div>
                                <button className="btn btn-sm btn-outline-danger" onClick={this.showDetails}>{this.state.showDetails ? "Read more..." : "Hide"} </button>
                            </div>                                
                        </dl>
                    </div>
                        
                    {contextType.isLoggedIn & this.props.displayFooter ? 
                    <div className="card-footer">
                        <div className="network-edit-button">
                            <Link href={`/Internships/edit/${item.id}`} className="btn btn-outline-danger btn-sm"> Edit</Link>
                            <Link href={`/Internships/delete/${item.id}`} className="btn btn-outline-danger btn-sm">Delete</Link>
                        </div>
                    </div>
                    : ""} 
                </div>
            );
        }
}

export default InternshipCard;

