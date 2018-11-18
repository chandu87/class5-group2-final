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
                                    <dt className="col-sm-3">Department</dt> 
                                    <dd className="col-sm-9">{item.department}</dd>
                                    <dt className="col-sm-3">Gender</dt> 
                                    <dd className="col-sm-9">{item.gender}</dd>
                                    <dt className="col-sm-3">Mentor Description </dt> <dd className="col-sm-9"> {item.mentor_description}</dd>
                                    <dt className="col-sm-3">Languages </dt> <dd className="col-sm-9"> {item.languages}</dd>
                                    <dt className="col-sm-3">Availability </dt> <dd className="col-sm-9"> {item.availability}</dd>
                                    <dt className="col-sm-3">Offering </dt> <dd className="col-sm-9"> {item.offering}</dd>
                                    <dt className="col-sm-3">Area Location  </dt> <dd className="col-sm-9"> {item.area_location}</dd>
                                    <dt className="col-sm-3">Preferred Meeting Place</dt> <dd className="col-sm-9"> {item.preferred_meeting_place}</dd>
                                    <dt className="col-sm-3">Affiliation  </dt> <dd className="col-sm-9"> {item.affiliation}</dd>
                            </dl>
                        </div>
                    </div>
            );
        }
}

export default MentorCard;