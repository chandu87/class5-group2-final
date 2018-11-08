import React, { Component } from "react";

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
        localStorage.setItem('authToken', response.token);

        // TODO maybe add a message showing "Logged in Successfully";
        // Or use react context, to show a logout button instead of login in the header

        this.props.history.push('/');
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={this.state.user.email}
              onChange={this.onFieldChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={this.state.user.password}
              onChange={this.onFieldChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
