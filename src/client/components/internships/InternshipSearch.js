import React from 'react';
import InternshipCard from "./InternshipCard";
import queryString from 'querystring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class InternshipSearch extends React.Component{
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
            console.log("InternshipSearch",searchData);
    
            fetch(`/api/Internships/search?name=${searchData.name}&location=${searchData.location}`).then(res=>res.json())
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
        if(this.state.dataisLoaded){
             console.log(this.state.data);
            return(
                <div className="container">
                <h5 className="text-center">Results Found : <strong>{this.state.data.length}</strong></h5>
                <hr className="hr-style2"/>
                    {this.state.data.map((item)=>
                        <InternshipCard key={item.id} internshipItem={item} displayFooter={true}/>
                    )}
                </div>
            );
        }
        else{
            return(
                <div className="container container-height">
                    <h5 className="text-center">{this.state.statusText}</h5>                    
                    <p className="text-center"><FontAwesomeIcon size="3x" icon="search"/></p>
                    <hr className="hr-style2"/>
                </div>);
        }
    }
}
export default InternshipSearch;