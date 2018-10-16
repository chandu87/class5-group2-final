import React from "react";
import logo from "../thread-logo.png";

import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link"> Home </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/Internships" className="nav-link"> Internships </Link>
              </li>
              <li className="nav-item">
                <Link to="/Events" className="nav-link"> Events </Link>  
              </li>
              <li className="nav-item">
                <Link to="/Mentors" className="nav-link"> Mentors </Link>              
              </li>
              <li className="nav-item">
                <Link to="/Networking" className="nav-link"> Networking </Link>              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;