import React from 'react';
import { Link } from "react-router-dom";
import MentorCard from './MentorCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MentorItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemDetailedData : "",
            isLoading: true,
            isActive : true
        }
    }
    componentDidMount(){
        fetch(`/api/mentors/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(response => this.setState({
            itemDetailedData : response,
            isLoading : false
        }));
    }    
    render(){
        if(!this.state.isLoading && this.state.isActive){
        return(
                    <div className="container">
                        <Link to={`/Mentors`} className="btn btn-outline-danger btn-sm mb-4"><FontAwesomeIcon icon="caret-square-left"/> Go back to Mentors</Link>
                        <MentorCard mentorItem={this.state.itemDetailedData}/>
                    </div>
                );
            }else if(!this.state.isLoading && !this.state.isActive){
                return(
                        <div className="container">
                            <h4>Item Successfully deleted</h4>
                            <br/>
                            <Link to="/Mentors"><FontAwesomeIcon icon="caret-square-left"/> Go Back</Link>
                        </div>);
            }
            else{
                return(<li>Is loading . . . . .</li>);
            }
    }
}

export default MentorItemDetails;