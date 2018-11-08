import React, { Component } from "react";

class Logout extends Component {
  componentWillMount() {
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default Logout;
