import React from 'react';
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactImageFallback from "react-image-fallback";

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

        return(
                <div key={item.id} className="card mb-4 card-as-link">
                    <div className="card-header">
                        <h2 className="card-title pricing-card-title"> {item.internship_title}</h2>
                    </div>
                    <div className="card-body">
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <ReactImageFallback
                                    src={item.internship_theme_image}
                                    fallbackImage="https://pbs.twimg.com/media/Dq77xWMV4AAGBly.jpg"
                                    initialImage="loader.gif"
                                    alt={item.application_requirements}
                                    className="my-0 font-weight-normal networking-image img-non-responsive" />
                            </div>
                        </div>
                        <div className="row">

                        </div>
                        <dl className="row">
                            <dt className="col-sm-3">Internship Category</dt> 
                            <dd className="col-sm-9"> {item.internship_category}</dd>
                            <dt className="col-sm-3">Organization Name</dt>
                            <dd className="col-sm-9"> {item.organisation_name}</dd>
                            <dt className="col-sm-3">Location </dt> <dd className="col-sm-9"> {item.location}</dd>
                        </dl>
                        {this.state.showDetails ? "" : 
                        <dl className="row">
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
                            <dt className="col-sm-3">Phone Contact </dt> 
                            <dd className="col-sm-9"><a href={"tel:" + item.phone_contact}>{item.phone_contact}</a></dd>
                            <dt className="col-sm-3">Email Contact </dt>
                            <dd className="col-sm-9"><a href={"mailto:" + item.email_contact}> {item.email_contact}</a></dd>
                            <dt className="col-sm-3">Organization Address </dt> <dd className="col-sm-9"> {item.organisation_address}</dd>
                            <dt className="col-sm-3">Organization Website </dt> 
                            <dd className="col-sm-9"> <a href={item.organisation_website} target="blank">Open link</a></dd>
                        </dl>}

                        <div className="row">
                            <div className="col-md-12">
                            {this.state.showDetails ?
                                <button className="btn btn-sm btn-outline-danger" onClick={this.showDetails}> <FontAwesomeIcon icon="caret-square-down" /> <span className="ml-1">Read more...</span> </button> :
                                <button className="btn btn-sm btn-outline-danger" onClick={this.showDetails}> <FontAwesomeIcon icon="caret-square-up" /> <span className="ml-1">Hide </span>  </button>
                            }
                            </div>
                        </div>                                

                    </div>
                        
                    {contextType.isLoggedIn & this.props.displayFooter ? 
                    <div className="card-footer">
                        <div className="network-edit-button">
                            <Link to={`/Internships/edit/${item.id}`} className="btn btn-outline-danger btn-sm"> <FontAwesomeIcon icon="edit" /> <span className="ml-1">Edit</span></Link>
                            <Link to={`/Internships/delete/${item.id}`} className="btn btn-outline-danger btn-sm"><FontAwesomeIcon icon="trash-alt" /><span className="ml-1">Delete</span></Link>
                        </div>
                    </div>
                    : ""} 
                </div>
            );
        }
}

export default InternshipCard;

