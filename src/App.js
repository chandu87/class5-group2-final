import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Internships from "./components/internships/Internships";
import Events from "./components/events/Events";
import Mentors from "./components/mentors/Mentors";
import Networking from "./components/networking/Networking";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/Internships" component={Internships} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/Mentors" component={Mentors}/>
          <Route exact path="/Networking" component={Networking}/>
        </Switch>
      </div>
    );
  }
}

export default App;
