import React from 'react';

class MentorCard extends React.Component{
    render(){
        const item = this.props.mentorItem;
        console.log('card details',item);
        return(
                <div key={item.id} className="card mb-4 card-as-link">
                        <div className="card-header">
                        <h2 className="card-title pricing-card-title"> {item.offering}</h2>
                        </div>
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-md-3">
                                    <img className="my-0 font-weight-normal networking-image" src={item.profile_picture} width="100%" alt={item.offering} />
                                </div>
                            </div>
                            <dl className="row">
                                    <dt className="col-sm-3">First Name</dt> 
                                    <dd className="col-sm-9">{item.first_name}</dd>
                                    <dt className="col-sm-3">Last Name</dt> 
                                    <dd className="col-sm-9"> {item.last_name}</dd>
                                    <dt className="col-sm-3"> Email</dt>
                                    <dd className="col-sm-9"> {item.email}</dd>
{ /*                                    <dt className="col-sm-3">Department</dt> 
                                    <dd className="col-sm-9">{item.department}</dd>
                                    <dt className="col-sm-3">Internship Description</dt> 
                                    <dd className="col-sm-9">{item.internship_description}</dd>
                                    <dt className="col-sm-3">Organisation Description </dt> <dd className="col-sm-9"> {item.organisation_description}</dd>
                                    <dt className="col-sm-3">Application Requirement </dt> <dd className="col-sm-9"> {item.application_requirements}</dd>
                                    <dt className="col-sm-3">Internship Availability Schedule </dt> <dd className="col-sm-9"> {item.internship_availabiltiy_schedule}</dd>
                                    <dt className="col-sm-3">Location </dt> <dd className="col-sm-9"> {item.location}</dd>
                                    <dt className="col-sm-3">Internship Publish Date </dt> <dd className="col-sm-9"> {item.internship_add_date}</dd>
                                    <dt className="col-sm-3">Internship Deadline</dt> <dd className="col-sm-9"> {item.internship_deadline}</dd>
                                    <dt className="col-sm-3">Organisation Description </dt> <dd className="col-sm-9"> {item.organisation_description}</dd>
                                    <dt className="col-sm-3">Contact Person </dt> <dd className="col-sm-9"> {item.contact_person}</dd>
                                    <dt className="col-sm-3">Phone Contact </dt> <dd className="col-sm-9"> {item.phone_contact}</dd>
                                    <dt className="col-sm-3">Email Contact </dt> <dd className="col-sm-9"> {item.email_contact}</dd>
                                    <dt className="col-sm-3">Organization Address </dt> <dd className="col-sm-9"> {item.organisation_address}</dd>
                                    <dt className="col-sm-3">Organization Website </dt> <dd className="col-sm-9"> {item.organisation_website}</dd>
        */       }                                    
                            </dl>
                        </div>
                    </div>
            );
        }
}

export default MentorCard;