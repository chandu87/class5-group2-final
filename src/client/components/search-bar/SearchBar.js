import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="container search-bar">
            <form>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-3" id="inlineFormInput" placeholder="Search Keyword"/>
                    </div>
                    <div className="col-auto">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="City Name"/>
                        </div>
                    </div>
                    <div class="col-auto">
                    <div class="form-select mb-3">
                        <select className="custom-select" id="inputGroupSelect02">
                            <option selected>Choose...</option>
                            <option value="1">Events</option>
                            <option value="2">InternShips</option>
                            <option value="3">Mentors</option>
                            <option value="4">Networking</option>
                        </select>
                    </div>
                    </div>
                    <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Search</button>
                    </div>
                </div>
        </form>                
            </div>
        );
    }
}
export default SearchBar;