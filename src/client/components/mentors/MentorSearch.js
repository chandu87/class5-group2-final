import React from 'react';
import queryString from 'querystring';
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MentorSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : {},
            dataIsLoaded: false,
            statusText: " Data Loading"
        }
    }
    componentDidMount(){
            const query = this.props.location.search.substr(1);
            const searchData = queryString.parse(query);
            console.log(searchData);
    
            fetch(`/api/Mentors/search?name=${searchData.name}&location=${searchData.location}`).then(res=>res.json())
            .then(response=>{
                this.setState({
                    data: response,
                    dataisLoaded : true
                })
            })
            .catch(err=>{
                console.log(err);
                this.setState({
                    statusText : "No matches found. Please search again"
                })
            })
    
        }
    
    
    
    render(){
        const contextType = LoginContext._currentValue;
        if(this.state.dataisLoaded){
            // console.log(this.state.data);
            return(
            <div className="container">
                <h5 className="text-center">Results Found : <strong>{this.state.data.length}</strong></h5>
                <hr className="hr-style2"/>

            <div className="card-columns">
                {this.state.data.map((item)=>
              <div key={item.id} className="card">
              <img className="card-img-top mentor-image" src={item.profile_picture} alt={item.first_name + " "+ item.last_name} />
              <div className="card-body">
                <h5 className="card-title">{item.first_name + " "+ item.last_name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{item.offering}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{item.availability}</span> <br />
                </p>
                <a href="#" className="btn btn-danger">Read more..</a>
                    {contextType.isLoggedIn ? <span>
                    <Link to={`/Mentors/delete/${item.id}`} className="btn btn-outline-danger btn-sm pull-right"> Delete</Link>                
                    <Link to={`/Mentors/edit/${item.id}`} className="btn btn-outline-danger btn-sm pull-right"> Edit</Link>
                    </span>
                    : ""} 
              </div>
              </div>
                )}
                </div>
            
            </div>);
        }
        else{
            return(               
             <div className="container container-height">
                <h5 className="text-center">{this.state.statusText}</h5>
                <p className="text-center"><FontAwesomeIcon size="3x" icon="search"/></p>
                <hr className="hr-style2"/>
            </div>
            );
        }
    }
}
export default MentorSearch;