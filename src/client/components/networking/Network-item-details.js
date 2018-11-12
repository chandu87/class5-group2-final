import React from 'react';
import NetworkCard from './NetworkCard';

class NetworkItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemDetailedData : "",
            isLoading: true
        }
    }
    componentDidMount(){
        fetch(`/api/networking/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(response => this.setState({
            itemDetailedData : response,
            isLoading : false
        }));
    }    
    render(){
        if(!this.state.isLoading){
        return(
                    <div className="container">
                        <a href={`/Networking`} className="btn btn-outline-danger btn-sm">Go back to Networks</a>
                        <NetworkCard networkItem={this.state.itemDetailedData}/>
                    </div>
                );
            }
            else{
                return(
                    <div className="container">
                        <h2>Is loading . . . . .</h2>
                    </div>);
            }
    }
}

export default NetworkItemDetails;