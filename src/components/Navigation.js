import React from "react";
import logo from "../thread-logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
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
                <a className="nav-link" href="#">
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Internships
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mentors
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Networking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;