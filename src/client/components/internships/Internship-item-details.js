import React from 'react';
import { Link } from "react-router-dom";
import InternshipCard from './InternshipCard';

class InternshipItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemDetailedData : "",
            isLoading: true,
            isActive : true
        }
    }
    componentDidMount(){
        fetch(`/api/internships/${this.props.match.params.id}`)
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
                        <Link to={`/Internships`} className="btn btn-outline-danger btn-sm mb-4">Go back to Internships</Link>
                        <InternshipCard internshipItem={this.state.itemDetailedData}/>
                    </div>
                );
            }else if(!this.state.isLoading && !this.state.isActive){
                return(
                        <div className="container">
                            <h4>Item Successfully deleted</h4>
                            <br/>
                            <Link to="/Internships"> Go Back</Link>
                        </div>);
            }
            else{
                return(<li>Is loading . . . . .</li>);
            }
    }
}

export default InternshipItemDetails;