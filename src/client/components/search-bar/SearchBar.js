import React from 'react';
import { withRouter} from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            networkData: {
                network_name : "",
                network_location:""
            }
        }
    }
    updateField = (e) =>{
        const {name, value} = e.target;
        this.setState({
            networkData : {
                ...this.state.networkData,
                [name]: value
            }
        })
    }
    submitForm = (e) => {
        // e.preventDefault();
        // console.log(this.props.location.search);
        console.log(this.state.networkData);
        const q_name = `network_name=${this.state.networkData.network_name}`;
        const q_location = `network_location=${this.state.networkData.network_location}`;
        // this.props.history.push(`/Networking/search?${q_name}&${q_location}`);
        this.props.history.push({pathname : '/Networking/search', search : `?${q_name}&${q_location}`});
        console.log("Submit form");
    }
    render(){
        return(
            <form>
            <div className="container search-bar">
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                        <input type="text" className="form-control mb-3" name="network_name" 
                            value={this.state.networkData.network_name} onChange={this.updateField} 
                            id="inlineFormInput" placeholder="Search Keyword" required/>
                    </div>
                    <div className="col-auto">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>
                            <input type="text" className="form-control" name="network_location" 
                                    value={this.state.networkData.network_location} onChange={this.updateField} 
                                    id="inlineFormInputGroup" placeholder="City Name"/>
                        </div>
                    </div>
                    <div className="col-auto">
                    <div className="form-select mb-3">
                        <select className="custom-select" id="inputGroupSelect02" required>
                            <option defaultValue>Choose...</option>
                            <option value="1">Events</option>
                            <option value="2">InternShips</option>
                            <option value="3">Mentors</option>
                            <option value="4">Networking</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-auto">
                    <button onClick={this.submitForm}>Button</button>
                    {/* <a className=" btn btn-outline-danger btn-sm" href="/Networking/search/NGO">Search</a> */}
                    </div>
                </div>       
            </div>
            </form>
        );
    }
}
export default withRouter(SearchBar);