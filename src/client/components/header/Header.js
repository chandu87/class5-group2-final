import React from "react";
import logo from "../../thread-logo.png";
import { Link } from "react-router-dom";
import LoginContext from '../../contexts/login';

import "./Header.css";

class Header extends React.Component {
    // static contextType = LoginContext;
    // console.log(contextType);

    render() {
        const contextType = LoginContext._currentValue;
        console.log(contextType);
    
        return (
                <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                        {/*<a class="navbar-brand" href="#">Navbar</a> */}
                          <a className="navbar-brand" href="/"><img src={logo} width="50px" height="60px" alt="Thread Logo" /></a>  
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                      
                        <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto nav">
                              <li className="nav-item iconInternship">
                                  <span className="icon material-icons md-36 md-dark">home</span>
                                  <Link to="/" className="nav-link menuLink"> Home </Link></li>
                      
                              <li className="nav-item iconInternship">
                                  <span className="icon material-icons md-36 md-dark">build</span>
                                  <Link to="/Internships" className="menuLink nav-link"> Internships </Link></li>
                              <li className="nav-item iconEvents">
                                  <span className="icon material-icons md-36 md-dark">date_range</span>
                                  <Link to="/Events" className="menuLink nav-link"> Events </Link></li>
                              <li className="nav-item iconMentors">
                                  <span className="icon material-icons md-36 md-dark">school</span>
                                  <Link to="/Mentors" className="menuLink nav-link"> Mentors </Link></li>
                              <li className="nav-item iconNetwork">
                                  <span className="icon material-icons md-36 md-dark">people</span>
                                  <Link to="/Networking" className="nav-link"> Networking </Link></li>
                              <li className="nav-item dropdown push-right">
                                  <span className="icon material-icons md-36 md-dark">account_box</span>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    contextType.isLoggedIn ?
                                        <div className="iconCode">
                                            <div className="text-center">
                                            {contextType.userName} </div>
                                            <div className="text-center"><Link className="btn btn-outline-danger text-center" to="/logout"> Logout </Link></div>
                                        </div>
                                    :
                                        <div className="iconCode">
                                        <div className="text-center">Please login</div>
                                            <div className="text-center"><Link to="/login" className="btn btn-outline-danger text-center"> Login </Link></div>
                                        </div>
                                }  
                                </div>
                              </li>                                  
                          </ul>
                        </div>
                      </nav>
                    </div>
                </div>                            
            </div>             
        );
    }
}

export default Header;