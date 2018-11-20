import React from 'react';
import InternshipCard from "./InternshipCard";
import queryString from 'querystring';

class InternshipSearch extends React.Component{
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
            console.log("InternshipSearch",searchData);
    
            fetch(`/api/Internships/search?name=${searchData.name}&location=${searchData.location}`).then(res=>res.json())
            .then(response=>{
                this.setState({
                    data: response,
                    dataisLoaded : true
                })
            })
        }
    
    
    
    render(){
        if(this.state.dataisLoaded){
             console.log(this.state.data);
            return(
                <div className="container">
                    {this.state.data.map((item)=>
                        <InternshipCard key={item.id} internshipItem={item}/>
                    )}
                </div>
            );
        }
        else{
            return(
                <div className="container">
                <h4>Data is Loading</h4>
                </div>);
        }
    }
}
export default InternshipSearch;