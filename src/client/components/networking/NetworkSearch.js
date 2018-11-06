import React from 'react';
import NetworkCard from "./NetworkCard";


class NetworkSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data :{},
            dataisLoading : false
        }
    }
    componentDidMount(){
        console.log(this.props);
        fetch(`/api/Networking/search/${this.props.match.params.searchQuery}`).then(res=>res.json())
        .then(response=>{
            this.setState({
                data: response,
                dataisLoading : true
            })
        })

    }
    render(){
        if(this.state.dataisLoading){
            console.log(this.state.data);
            return(
            <div>
                {this.state.data.map((item)=>
            <NetworkCard networkItem={item}/>
                )}
            </div>);
        }
        else{
            return("Data is Loading");
        }
    }
}
export default NetworkSearch;