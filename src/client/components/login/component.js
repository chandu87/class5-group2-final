import React, { Component } from "react";
import { NotificationManager } from 'react-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  onFieldChange = event => {
    const { name, value } = event.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();

    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(this.state.user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        console.log("Success:", JSON.stringify(response));
        NotificationManager.success('Logged In Successfully');
        localStorage.setItem('authToken', response.token);

        // TODO maybe add a message showing "Logged in Successfully";
        // Or use react context, to show a logout button instead of login in the header

        this.props.history.push('/');
      })
      .catch(error => {
        NotificationManager.error('Invalid credentials');
        // TODO Maybe clear the passsword form
        this.setState({
          user: {
            ...this.state.user,
            password: ''
          }
        })
        console.error("Error:", error)
      });
  };

  render() {
    return (
      <div className="container">

        <form className="form-signin" onSubmit={this.onSubmit}>
        <p className="display-4 text-center">LOGIN</p>
        <p className="text-center"><FontAwesomeIcon size="5x" icon="sign-in-alt"/></p>
        <div className="form-group row">
          <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={this.state.user.email} 
              onChange={this.onFieldChange} 
              className="form-control mb-2" 
              placeholder="Email address" 
              required="" 
              autoFocus="" />
          </div>

        <div className="form-group row">
          <label htmlFor="inputPassword">Password</label>
          <input 
              type="password" 
              name="password" 
              id="password" 
              value={this.state.user.password} 
              onChange={this.onFieldChange} 
              className="form-control" 
              placeholder="Password" 
              required="" />
        </div>

        <button className="btn btn-lg btn-secondary btn-block no-gutters event-btn" type="submit">Log in</button>
        <p className="mt-5 mb-3 text-muted text-center">© 2018-2019</p>

        </form>        
      </div>
    );
  }
}

export default Login;
