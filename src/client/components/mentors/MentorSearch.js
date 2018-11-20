import React from 'react';
import queryString from 'querystring';
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';


class MentorSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : {},
            dataIsLoaded: false
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
        }
    
    
    
    render(){
        const contextType = LoginContext._currentValue;
        if(this.state.dataisLoaded){
            // console.log(this.state.data);
            return(
            <div className="container">
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
                    {contextType.isLoggedIn ? 
                        <Link to={`/Mentors/edit/${item.id}`} target="_blank" className="btn btn-outline-danger btn-sm pull-right"> Edit</Link>                
                    : ""} 
              </div>
              </div>
                )}
                </div>
            
            </div>);
        }
        else{
            return("Data is Loading");
        }
    }
}
export default MentorSearch;