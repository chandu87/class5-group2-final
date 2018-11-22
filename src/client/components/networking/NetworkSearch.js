import React from 'react';
import NetworkCard from "./NetworkCard";
import queryString from 'querystring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class NetworkSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data :{},
            dataisLoaded : false,
            statusText: " Data Loading"
        }
    }
    componentWillMount(){
        // debugger;
        // console.log(this.props.location);

        const query = this.props.location.search.substr(1);
        const searchData = queryString.parse(query);

        fetch(`/api/Networking/search?name=${searchData.name}&location=${searchData.location}`).then(res=>res.json())
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
            // console.log(this.state.data);
            return(
            <div className="container">
                <h5 style={{textAlign: "center"}}>Results Found : <strong>{this.state.data.length}</strong></h5>
                <hr className="hr-style1"/>
                {this.state.data.map((item)=>
                    <NetworkCard networkItem={item} displayCardFooter={true}/>
                )}
            </div>);
        }
        else{
            return( 
                <div className="container container-height">
                    <h5 style={{textAlign: "center", marginTop: "10%"}}>{this.state.statusText}</h5>
                    <p className="text-center"><FontAwesomeIcon size="3x" icon="search"/></p>

                    <hr className="hr-style2"/>
                </div>
                );

            
        }
    }
}
export default NetworkSearch;