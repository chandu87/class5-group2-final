import React from 'react';
import _ from 'lodash';
import { withRouter} from 'react-router-dom';
import querystring from 'querystring';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                name : "",
                location:"",
                table:""
            }
        }
    }

    // componentDidMount = () => {
    //     if (this.state.data.table != this.props.route ) {
    //         this.setState({
    //             data: {
    //                 ...this.state.data,
    //                 table: this.props.route
    //             }
    //         })
    //     }
    // }

    updateField = (e) =>{
        const {name, value} = e.target;
        this.setState({
            data : {
                ...this.state.data,
                [name]: value
            }
        })
    }
    render(){
        return(
            <form action={`/${this.state.data.table}/search`}>
            <div className="container search-bar">
                <div className="form-row align-items-center">
                    <div className="col-md-4">
                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                        <input type="text" className="form-control mb-3" name="name" 
                            value={this.state.data.name} onChange={this.updateField} 
                            id="inlineFormInput" placeholder="Search Keyword"/>
                    </div>
                    <div className="col-md-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>
                            <input type="text" className="form-control" name="location" 
                                    value={this.state.data.location} onChange={this.updateField} 
                                    id="inlineFormInputGroup" placeholder="City Name"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-select mb-3">
                            <select className="custom-select" id="inputGroupSelect02" name="table" 
                                    value={this.state.data.table} onChange={this.updateField} required>
                                <option value="">None</option>
                                <option value="Events">Events</option>
                                <option value="InternShips">InternShips</option>
                                <option value="Mentors">Mentors</option>
                                <option value="Networking">Networking</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-danger">Search</button>
                        </div>
                    </div>
                </div>       
            </div>
            </form>
        );
    }
}
export default withRouter(SearchBar);