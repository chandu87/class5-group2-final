import React from 'react';
import queryString from 'querystring';
import EventCard from './EventCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class EventSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data :{},
            dataisLoaded : false,
            statusText: " Data Loading"
        }
    }
    componentWillMount(){
        const query = this.props.location.search.substr(1);
        const searchData = queryString.parse(query);

        fetch(`/api/Events/search?name=${searchData.name}&location=${searchData.location}`).then(res=>{
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json()})
        .then(response=>{
            this.setState({
                data: response,
                dataisLoaded : true
            })
        }).catch(err=>{
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
                <h5 className="text-center">Results Found : <strong>{this.state.data.length}</strong></h5>
                <hr className="hr-style2"/>
                {this.state.data.map((item)=>
                    <EventCard key={item.id} eventsData={item}/>
                )}
            </div>);
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
export default EventSearch; 