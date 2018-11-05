import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="container search-bar">
            <form>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                    <input type="text" className="form-control mb-3" id="inlineFormInput" placeholder="Search Keyword"/>
                    </div>
                    <div className="col-auto">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="City Name"/>
                        </div>
                    </div>
                    <div className="col-auto">
                    <div className="form-select mb-3">
                        <select className="custom-select" id="inputGroupSelect02">
                            <option defaultValue>Choose...</option>
                            <option value="1">Events</option>
                            <option value="2">InternShips</option>
                            <option value="3">Mentors</option>
                            <option value="4">Networking</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Search</button>
                    </div>
                </div>
        </form>                
            </div>
        );
    }
}
export default SearchBar;