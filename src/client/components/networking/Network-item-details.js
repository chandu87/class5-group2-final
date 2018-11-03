import React from 'react';
import NetworkCard from './NetworkCard';

class NetworkItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemDetailedData : "",
            isLoading: true,
            isActive : true
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
        if(!this.state.isLoading && this.state.isActive){
        return(
                    <div>
                        <a href={`/Networking`} className="btn btn-outline-danger btn-sm">Go back to Networks</a>
                        <NetworkCard networkItem={this.state.itemDetailedData}/>
                    </div>
                );
            }else if(!this.state.isLoading && !this.state.isActive){
                return(
                        <div>
                            <h4>Item Successfully deleted</h4>
                            <br/>
                            <a href="/Networking"> Go Back</a>
                        </div>);
            }
            else{
                return(<li>Is loading . . . . .</li>);
            }
    }
}

export default NetworkItemDetails;