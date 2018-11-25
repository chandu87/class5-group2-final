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
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/*<a class="navbar-brand" href="#">Navbar</a> */}
                          <a class="navbar-brand" href="/"><img src={logo} width="50px" height="60px" alt="Thread Logo" /></a>  
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                      
                        <div class="menu collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav mr-auto nav">
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
                              <li class="nav-item dropdown push-right">
                                  <span className="icon material-icons md-36 md-dark">account_box</span>
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
{ /*                    
                            <div className="col-12 col-sm-12 col-md-1 col-lg-3">
                                <div className="siteLogo">
                                <a href="/"><img src={logo} width="70px" height="80px" alt="Thread Logo" /></a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-11 col-lg-9">
                                <div className="menu">
                                    <nav>
                                        <ul className="nav">
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
                                            {
                                                contextType.isLoggedIn ?
                                                    <li className="nav-item iconCode">
                                                        <span className="icon material-icons md-36 md-dark" />
                                                        {contextType.userName}
                                                        <Link to="/logout" className="nav-link"> Logout </Link>
                                                    </li>
                                                :
                                                    <li className="nav-item iconCode">
                                                        <span className="icon material-icons md-36 md-dark" />
                                                        <Link to="/login" className="nav-link"> Login </Link>
                                                    </li>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
*/}                            
                      </div>             
        );
    }
}

export default Header;